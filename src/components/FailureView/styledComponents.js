import styled from 'styled-components'

import {FlexCol, Button, LightTextColor} from '../Home/styledComponents'

export const FailureViewContainer = styled(FlexCol)`
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const FailureImg = styled.img`
  width: 60%;
  max-width: 300px;
`

export const FailureHeading = styled.p`
  ${LightTextColor};
  font-size: 18px;
  font-weight: 500;
  margin-top: 40px;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailureDescription = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const RetryBtn = styled(Button)`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 8px 30px;
  margin-top: 16px;
`
