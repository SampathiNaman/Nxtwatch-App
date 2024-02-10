import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap/'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import SideBarLarge from '../SideBarLarge'
import ComponentTitle from '../ComponentTitle'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext/index'
import SavedVideosContext from '../../context/SavedVideosContext/index'

import {
  Wrapper,
  SideBarWrapper,
  VideosContainer,
  FlexRow,
} from '../Home/styledComponents'
import {SavedVideosContainer} from './styledComponents'

const failureViewObject = {
  failureImgUrls: [
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png',
  ],
  failureAltImg: 'no saved videos',
  failureHeading: 'No saved videos found',
  failureDescription: 'You can save your videos while watching them.',
}

class SavedVideos extends Component {
  renderSavedVideos = savedVideos =>
    savedVideos.map(video => (
      <Col xs="12" key={video.id}>
        <VideoItem videoItem={video} type="saved-videos" route="saved-videos" />
      </Col>
    ))

  renderErrorView = viewObject => <FailureView viewObject={viewObject} />

  renderTitle = () => (
    <ComponentTitle
      icon={<FaFire size={30} color="red" />}
      title="Saved Videos"
    />
  )

  render() {
    return (
      <Wrapper data-testid="savedVideos">
        <Header />
        <SideBarWrapper>
          <SideBarLarge />
          <ThemeContext.Consumer>
            {({isDark}) => (
              <SavedVideosContext.Consumer>
                {({savedVideos}) => (
                  <SavedVideosContainer isDark={isDark}>
                    {savedVideos.length > 0 && this.renderTitle()}
                    <VideosContainer as={Container} isDark={isDark}>
                      <FlexRow as={Row}>
                        {savedVideos.length > 0
                          ? this.renderSavedVideos(savedVideos)
                          : this.renderErrorView(failureViewObject)}
                      </FlexRow>
                    </VideosContainer>
                  </SavedVideosContainer>
                )}
              </SavedVideosContext.Consumer>
            )}
          </ThemeContext.Consumer>
        </SideBarWrapper>
      </Wrapper>
    )
  }
}

export default SavedVideos
