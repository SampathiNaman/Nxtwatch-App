import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Container, Row, Col} from 'react-bootstrap/'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import SideBarLarge from '../SideBarLarge'
import ComponentTitle from '../ComponentTitle'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext/index'

import {
  Wrapper,
  SideBarWrapper,
  VideosContainer,
  FlexRow,
  FlexCol,
} from '../Home/styledComponents'
import {TrendingContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const failureViewObject = {
  failureImgUrls: [
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
  ],
  failureAltImg: 'failure view',
  failureHeading: 'Oops! Something Went Wrong',
  failureDescription: `We are having some trouble to complete your request. Please try
              again.`,
}

class Trending extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
  }

  getFormattedData = data =>
    data.map(video => ({
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      },
      id: video.id,
      publishedAt: video.published_at,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = this.getFormattedData(data.videos)
      this.setState({
        videos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideos = () => {
    const {videos} = this.state
    return videos.map(video => (
      <Col xs="12" key={video.id}>
        <VideoItem videoItem={video} type="trending" route="trending" />
      </Col>
    ))
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

  renderErrorView = viewObject => (
    <FailureView viewObject={viewObject} getVideos={this.getTrendingVideos} />
  )

  renderTrendingViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderErrorView(failureViewObject)
      default:
        return null
    }
  }

  renderTitle = () => (
    <ComponentTitle icon={<FaFire size={30} color="red" />} title="Trending" />
  )

  componentDidMount = () => this.getTrendingVideos()

  render() {
    const {apiStatus} = this.state
    return (
      <Wrapper data-testid="trending">
        <Header />
        <SideBarWrapper>
          <SideBarLarge />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <TrendingContainer isDark={isDark}>
                  {apiStatus === apiStatusConstants.success &&
                    this.renderTitle()}
                  <VideosContainer as={Container} isDark={isDark}>
                    <FlexRow as={Row}>{this.renderTrendingViews()}</FlexRow>
                  </VideosContainer>
                </TrendingContainer>
              )
            }}
          </ThemeContext.Consumer>
        </SideBarWrapper>
      </Wrapper>
    )
  }
}

export default Trending
