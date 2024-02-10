import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Container, Row, Col} from 'react-bootstrap/'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {IoSearchSharp} from 'react-icons/io5'

import Header from '../Header'
import SideBarLarge from '../SideBarLarge'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext/index'

import {
  Wrapper,
  HomeContainer,
  SideBarWrapper,
  Banner,
  BannerLogoImg,
  BannerCloseBtn,
  BannerText,
  BannerBtn,
  VideosContainer,
  Form,
  SearchInput,
  CustomSearchBtn,
  FlexRow,
  FlexCol,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  noData: 'NO_DATA',
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

const noDataViewObject = {
  failureImgUrls: [
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
  ],
  failureAltImg: 'failure view',
  failureHeading: 'No Search results found',
  failureDescription: `Try different key words or remove search
filter`,
}

class Home extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount = () => this.getVideos()

  setSearchInput = e => this.setState({searchInput: e.target.value})

  renderSearch = () => {
    const {searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Form onSubmit={this.getSearchedVideos}>
              <SearchInput
                value={searchInput}
                onChange={this.setSearchInput}
                isDark={isDark}
                type="search"
                placeholder="Search"
              />
              <CustomSearchBtn
                isDark={isDark}
                type="submit"
                data-testid="searchButton"
              >
                <IoSearchSharp size="16" color="#909090" />
              </CustomSearchBtn>
            </Form>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  getSearchedVideos = e => {
    e.preventDefault()
    this.getVideos()
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

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        apiStatus:
          formattedData.length > 0
            ? apiStatusConstants.success
            : apiStatusConstants.noData,
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

  renderVideos = () => {
    const {videos} = this.state
    return videos.map(video => (
      <Col xs="12" sm="6" xl="4" key={video.id}>
        <VideoItem videoItem={video} type="all" route="videos" />
      </Col>
    ))
  }

  renderErrorView = viewObject => (
    <FailureView viewObject={viewObject} getVideos={this.getVideos} />
  )

  renderHomeViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.noData:
        return this.renderErrorView(noDataViewObject)
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderErrorView(failureViewObject)

      default:
        return null
    }
  }

  renderBanner = () => (
    <Banner data-testid="banner">
      <BannerCloseBtn data-testid="close">
        <IoMdClose size={20} color="black" />
      </BannerCloseBtn>
      <BannerLogoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <BannerBtn>GET IT NOW</BannerBtn>
    </Banner>
  )

  render() {
    return (
      <Wrapper data-testid="home">
        <Header />
        <SideBarWrapper>
          <SideBarLarge />

          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <HomeContainer isDark={isDark}>
                  {this.renderBanner()}

                  <VideosContainer as={Container} fluid isDark={isDark}>
                    <Row>
                      <Col xs="12" md="6" xl="4">
                        {this.renderSearch()}
                      </Col>
                    </Row>
                    <FlexRow as={Row}>{this.renderHomeViews()}</FlexRow>
                  </VideosContainer>
                </HomeContainer>
              )
            }}
          </ThemeContext.Consumer>
        </SideBarWrapper>
      </Wrapper>
    )
  }
}
export default Home
