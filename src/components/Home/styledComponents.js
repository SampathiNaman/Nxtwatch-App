import styled, {css} from 'styled-components'

export const BgColor = css`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LightBgColor = css`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const TextColor = css`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const LightTextColor = css`
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
`

export const Button = styled.button`
  background-color: transparent;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
`

export const Wrapper = styled.div`
  min-height: 100vh;
  ${LightBgColor}
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`

export const HomeContainer = styled.div`
  ${LightBgColor};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    overflow-y: scroll;
  }
`

export const SideBarWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (min-width: 768px) {
    height: 100%;
    overflow-y: auto;
  }
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 40px;
`

export const BannerLogoImg = styled.img`
  width: 110px;
  margin: 0px;
`

export const BannerCloseBtn = styled(IconButton)`
  display: block;
  margin-left: auto;
`

export const BannerText = styled.p`
  width: 80%;
  color: #181818;
  font-size: 18px;
  font-family: Roboto;
  line-height: 1.8;
  margin: 20px 0px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const BannerBtn = styled(Button)`
  color: #181818;
  background-color: transparent;
  font-weight: 600;
  border: 1px solid #181818;
`

export const VideosContainer = styled.div`
  ${LightBgColor};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  height: 36px;
  display: flex;
  align-items: stretch;
  margin: 20px 0px;
`

export const SearchInput = styled.input`
  ${TextColor};
  ${BgColor};
  flex: 1;
  font-size: 16px;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  outline: none;
  padding: 0px 20px;
`

export const CustomSearchBtn = styled(IconButton)`
  width: 80px;
  background-color: ${props => (props.isDark ? '#424242' : '#f1f1f1')};
  flex-shrink: 0;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
`

export const FlexRow = styled.div`
  flex-grow: 1;
  padding-bottom: 40px;
`

export const FlexCol = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`
