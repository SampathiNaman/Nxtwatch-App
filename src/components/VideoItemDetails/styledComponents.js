import styled from 'styled-components'
import {
  Button,
  IconButton,
  HomeContainer,
  VideosContainer,
  LightTextColor,
} from '../Home/styledComponents'
import {InfoText} from '../VideoItem/styledComponents'

export const VideoItemDetailsContainer = styled(HomeContainer)``

export const VideoItemContainer = styled(VideosContainer)``

export const PlayerWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  aspect-ratio: 16/9;
  margin: 20px 0px;

  @media screen and (min-width: 768px) {
    margin: 40px 0px;
  }
`

export const Thumbnail = styled.img``

export const ResponsiveVideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`

export const ActionItemBtn = styled(Button)`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  font-size: 18px;
  border: none;
`

export const ActionItemIconBtn = styled(IconButton)`
  margin-right: 8px;
`

export const Separator = styled.hr`
  background-color: #94a3b8;
  height: 2px;
`

export const ProfileImg = styled.img`
  width: 60px;
`

export const VideoDescription = styled(InfoText)`
  ${LightTextColor}
  font-size: 16px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`
