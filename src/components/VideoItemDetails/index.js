import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {Container, Row, Col} from 'react-bootstrap/'
import Cookies from 'js-cookie'
import {formatDistanceToNow, parse} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import SideBarLarge from '../SideBarLarge'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext/index'
import SavedVideosContext from '../../context/SavedVideosContext/index'

import {
  VideoItemDetailsContainer,
  VideoItemContainer,
  PlayerWrapper,
  ResponsiveVideoInfoContainer,
  ActionItemBtn,
  ActionItemIconBtn,
  Separator,
  ProfileImg,
  VideoDescription,
} from './styledComponents'
import {
  Wrapper,
  SideBarWrapper,
  FlexRow,
  FlexCol,
} from '../Home/styledComponents'
import {
  VideoInfo,
  TitleText,
  InfoText,
  ProfileContainer,
} from '../VideoItem/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const failureViewObject = {
  failureImgUrls: [
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
  ],
  failureAltImg: 'no videos',
  failureHeading: 'Oops! Something Went Wrong',
  failureDescription: `We are having some trouble to complete your request. Please try
              again.`,
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    liked: false,
    disliked: false,
    saved: false,
  }

  like = () =>
    this.setState(prevState =>
      prevState.liked ? {liked: false} : {liked: true, disliked: false},
    )

  dislike = () =>
    this.setState(prevState =>
      prevState.disliked ? {disliked: false} : {disliked: true, liked: false},
    )

  save = () =>
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))

  updateSavedVideos = () => {
    const {videoDetails, saved} = this.state
    const {id} = videoDetails
    const {saveVideo, removeSavedVideo} = this.context
    if (saved) {
      saveVideo(videoDetails)
    } else {
      removeSavedVideo(id)
    }
  }

  getFormattedData = video => ({
    channel: {
      name: video.channel.name,
      profileImageUrl: video.channel.profile_image_url,
      subscriberCount: video.channel.subscriber_count,
    },
    id: video.id,
    description: video.description,
    publishedAt: video.published_at,
    thumbnailUrl: video.thumbnail_url,
    title: video.title,
    videoUrl: video.video_url,
    viewCount: video.view_count,
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = this.getFormattedData(data.video_details)
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FlexCol xs="12" as={Col} data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#3b82f6'}
              height="50"
              width="50"
            />
          </FlexCol>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetails = () => {
    const {videoDetails, liked, disliked, saved} = this.state
    const {
      channel,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const formattedDate = formatDistanceToNow(
      parse(publishedAt, 'MMM d, yyyy', new Date()),
    )
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Col xs="12">
              <PlayerWrapper>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  light={thumbnailUrl}
                />
              </PlayerWrapper>
              <VideoInfo>
                <TitleText isDark={isDark}>{title}</TitleText>
                <ResponsiveVideoInfoContainer>
                  <VideoInfo flexSm="row" flexMd="row">
                    <InfoText>{viewCount} views</InfoText>
                    <InfoText as="li" listStyle="disc">
                      {formattedDate}
                    </InfoText>
                  </VideoInfo>
                  <VideoInfo flexSm="row" flexMd="row">
                    <ActionItemBtn
                      onClick={this.like}
                      color={liked ? '#2563eb' : '#64748b'}
                    >
                      <ActionItemIconBtn as="span">
                        <AiOutlineLike size="20" />
                      </ActionItemIconBtn>
                      Like
                    </ActionItemBtn>
                    <ActionItemBtn
                      onClick={this.dislike}
                      color={disliked ? '#2563eb' : '#64748b'}
                    >
                      <ActionItemIconBtn as="span">
                        <AiOutlineDislike size="20" />
                      </ActionItemIconBtn>
                      Dislike
                    </ActionItemBtn>
                    <ActionItemBtn
                      onClick={this.save}
                      color={saved ? '#2563eb' : '#64748b'}
                    >
                      {' '}
                      <ActionItemIconBtn as="span">
                        <RiMenuAddFill size="20" />
                      </ActionItemIconBtn>
                      Save
                    </ActionItemBtn>
                  </VideoInfo>
                </ResponsiveVideoInfoContainer>
              </VideoInfo>
              <Separator />
              <ProfileContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <VideoInfo>
                  <TitleText isDark={isDark}>{name}</TitleText>
                  <InfoText>{subscriberCount} subscribers</InfoText>
                </VideoInfo>
              </ProfileContainer>
              <VideoDescription isDark={isDark}>{description}</VideoDescription>
            </Col>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderErrorView = viewObject => (
    <FailureView viewObject={viewObject} getVideos={this.getVideoDetails} />
  )

  renderVideoItemDetailsViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderErrorView(failureViewObject)
      default:
        return null
    }
  }

  componentDidMount = () => {
    const {match} = this.props
    const {params} = match
    const {route} = params
    this.setState({saved: route === 'saved-videos'})
    this.getVideoDetails()
  }

  componentWillUnmount = () => this.updateSavedVideos()

  render() {
    return (
      <Wrapper data-testid="videoItemDetails">
        <Header />
        <SideBarWrapper>
          <SideBarLarge />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <VideoItemDetailsContainer isDark={isDark}>
                  <VideoItemContainer as={Container} fluid isDark={isDark}>
                    <FlexRow as={Row}>
                      {this.renderVideoItemDetailsViews()}
                    </FlexRow>
                  </VideoItemContainer>
                </VideoItemDetailsContainer>
              )
            }}
          </ThemeContext.Consumer>
        </SideBarWrapper>
      </Wrapper>
    )
  }
}

VideoItemDetails.contextType = SavedVideosContext

export default VideoItemDetails
