import {Container, Row, Col} from 'react-bootstrap/'
import Header from '../Header'
import SideBarLarge from '../SideBarLarge'

import ThemeContext from '../../context/ThemeContext/index'

import {
  Wrapper,
  HomeContainer,
  SideBarWrapper,
  VideosContainer,
  FlexRow,
} from '../Home/styledComponents'

import {
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
} from '../FailureView/styledComponents'

const NotFound = () => {
  const {failureImgUrls, failureAltImg, failureHeading, failureDescription} = {
    failureImgUrls: [
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
    ],
    failureAltImg: 'not found',
    failureHeading: 'Page Not Found',
    failureDescription: `We are sorry, the page you requested could not be found.`,
  }

  return (
    <Wrapper>
      <Header />
      <SideBarWrapper>
        <SideBarLarge />
        <ThemeContext.Consumer>
          {({isDark}) => (
            <HomeContainer isDark={isDark}>
              <VideosContainer as={Container} isDark={isDark}>
                <FlexRow as={Row}>
                  <FailureViewContainer as={Col}>
                    <FailureImg
                      src={isDark ? failureImgUrls[1] : failureImgUrls[0]}
                      alt={failureAltImg}
                    />
                    <FailureHeading isDark={isDark}>
                      {failureHeading}
                    </FailureHeading>
                    <FailureDescription isDark={isDark}>
                      {failureDescription}
                    </FailureDescription>
                  </FailureViewContainer>
                </FlexRow>
              </VideosContainer>
            </HomeContainer>
          )}
        </ThemeContext.Consumer>
      </SideBarWrapper>
    </Wrapper>
  )
}

export default NotFound
