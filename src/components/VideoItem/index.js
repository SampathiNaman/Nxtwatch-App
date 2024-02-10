import {Link} from 'react-router-dom'
import {formatDistanceToNow, parse} from 'date-fns'

import ThemeContext from '../../context/ThemeContext/index'

import {
  VideoItemContainer,
  ThumbnailImg,
  ProfileImg,
  ProfileContainer,
  VideoInfo,
  TitleText,
  InfoText,
} from './styledComponents'

const VideoItem = props => {
  const {videoItem, type, route} = props
  const {
    channel = [],
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoItem
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoItemContainer
            to={`/${route}/${id}`}
            style={{textDecoration: 'none'}}
            type={type}
            as={Link}
          >
            <ThumbnailImg
              type={type}
              src={thumbnailUrl}
              alt="video thumbnail"
            />
            <ProfileContainer>
              <ProfileImg
                width="32px"
                type={type}
                src={profileImageUrl}
                alt="channel logo"
              />
              <VideoInfo>
                <TitleText isDark={isDark} type={type}>
                  {title}
                </TitleText>
                <VideoInfo flexSm={type === 'saved-videos' ? 'column' : 'row'}>
                  {type !== 'gaming' && (
                    <InfoText type={type} widthMd="100%">
                      {name}
                    </InfoText>
                  )}
                  <VideoInfo flexSm="row" flexMd="row">
                    <InfoText
                      as={
                        type === 'gaming' || type === 'saved-videos'
                          ? 'p'
                          : 'li'
                      }
                    >
                      {viewCount}{' '}
                      {type === 'gaming' ? 'Watching Worldwide' : 'views'}
                    </InfoText>
                    {type !== 'gaming' && (
                      <InfoText as="li" listStyle="disc">
                        {formatDistanceToNow(
                          parse(publishedAt, 'MMM d, yyyy', new Date()),
                        )}
                      </InfoText>
                    )}
                  </VideoInfo>
                </VideoInfo>
              </VideoInfo>
            </ProfileContainer>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
