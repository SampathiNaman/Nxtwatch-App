import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Container, Row, Col} from 'react-bootstrap/'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import ComponentTitle from '../ComponentTitle'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import SideBarLarge from '../SideBarLarge'

import ThemeContext from '../../context/ThemeContext/index'

import {
  Wrapper,
  SideBarWrapper,
  VideosContainer,
  FlexRow,
  FlexCol,
} from '../Home/styledComponents'
import {GamingContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const failureViewObject = {
  failureImgUrls: [
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
  ],
  failureAltImg: 'failure view',
  failureHeading: 'No Search results found',
  failureDescription: `Try different key words or remove search
filter`,
}
class Gaming extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
  }

  getFormattedData = data =>
    data.map(video => ({
      id: video.id,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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

  renderGamingVideos = () => {
    const {videos} = this.state

    return videos.map(video => (
      <Col xs="6" md="4" key={video.id}>
        <VideoItem videoItem={video} type="gaming" route="gaming" />
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
    <FailureView viewObject={viewObject} getVideos={this.getGamingVideos} />
  )

  renderGamingViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure: {
        return this.renderErrorView(failureViewObject)
      }
      default:
        return null
    }
  }

  renderTitle = () => (
    <ComponentTitle
      icon={<SiYoutubegaming size={30} color="red" />}
      title="Gaming"
    />
  )

  componentDidMount = () => this.getGamingVideos()

  render() {
    const {apiStatus} = this.state
    return (
      <Wrapper data-testid="gaming">
        <Header />
        <SideBarWrapper>
          <SideBarLarge />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <GamingContainer isDark={isDark}>
                  {apiStatus === apiStatusConstants.success &&
                    this.renderTitle()}
                  <VideosContainer as={Container} isDark={isDark}>
                    <FlexRow as={Row}>{this.renderGamingViews()}</FlexRow>
                  </VideosContainer>
                </GamingContainer>
              )
            }}
          </ThemeContext.Consumer>
        </SideBarWrapper>
      </Wrapper>
    )
  }
}

export default Gaming
