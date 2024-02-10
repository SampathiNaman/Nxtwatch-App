import {Col} from 'react-bootstrap/'

import ThemeContext from '../../context/ThemeContext/index'

import {
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryBtn,
} from './styledComponents'

const FailureView = props => {
  const {viewObject, getVideos} = props
  const {
    failureImgUrls,
    failureAltImg,
    failureHeading,
    failureDescription,
  } = viewObject
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureViewContainer as={Col}>
            <FailureImg
              src={isDark ? failureImgUrls[1] : failureImgUrls[0]}
              alt={failureAltImg}
            />
            <FailureHeading isDark={isDark}>{failureHeading}</FailureHeading>
            <FailureDescription isDark={isDark}>
              {failureDescription}
            </FailureDescription>
            {getVideos !== undefined && (
              <RetryBtn btnStyle="primary" onClick={getVideos}>
                Retry
              </RetryBtn>
            )}
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
