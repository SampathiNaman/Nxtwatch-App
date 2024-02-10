import styled from 'styled-components'
import {TextColor} from '../Home/styledComponents'

export const TitleContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 30px 50px;
    margin-bottom: 40px;
  }
`
export const IconContainer = styled.div`
  aspect-ratio: 1/1;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#d7dfe9')};
  padding: 12px 14px;
  border-radius: 50%;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    padding: 22px 26px;
  }
`
export const Title = styled.h1`
  ${TextColor}
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
