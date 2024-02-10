import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.type === 'saved-videos' ? 'row' : 'column'};
  column-gap: ${props => (props.type === 'saved-videos' ? '16px' : '0px')};
  align-items: stretch;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    margin-bottom: 50px;
    flex-direction: ${props =>
      props.type === 'trending' || props.type === 'saved-videos'
        ? 'row'
        : 'column'};
    column-gap: ${props =>
      props.type === 'trending' || props.type === 'saved-videos'
        ? '16px'
        : '0px'};
  }
`
export const ThumbnailImg = styled.img`
    width: ${props => (props.type === 'saved-videos' ? '46%' : '100%')};
    max-height: ${props => (props.type === 'saved-videos' ? '250px' : 'unset')};
    

  @media screen and (min-width: 576px) {
    width: ${props =>
      props.type === 'trending' || props.type === 'saved-videos'
        ? '46%'
        : '100%'};
    max-width: ${props => {
      switch (props.type) {
        case 'trending':
          return '350px'
        case 'gaming':
          return '250px'
        case 'saved-videos':
          return '350px'
        default:
          return 'unset'
      }
    }}
`

export const ProfileImg = styled.img`
  width: ${props => props.width};
  display: ${props => (props.type === 'all' ? 'block' : 'none')};
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 12px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexSm ? props.flexSm : 'column')};
  column-gap: ${props => (props.flexSm ? '16px' : '0px')};

  @media screen and (min-width: 576px) {
    flex-direction: ${props => (props.flexMd ? props.flexMd : 'column')};
  }
`

export const InfoText = styled.p`
  color: ${props => (props.type === 'gaming' ? '#475569' : '#64748b')};
  font-family: 'Roboto';
  margin-bottom: 4px;

  @media screen and (min-width: 576px) {
    width: ${props => (props.widthMd ? props.widthMd : 'auto')};
    list-style-type: ${props => (props.listStyle === 'disc' ? 'disc' : 'none')};
    margin-right: ${props => (props.listStyle !== 'disc' ? '10px' : '0px')};
  }
`

export const TitleText = styled(InfoText)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: ${props => (props.type === 'all' ? 'normal' : 'bold')};

  @media screen and (min-width: 576px) {
    font-size: ${props => (props.type === 'trending' ? 'larger' : 'normal')};
  }
`
