import styled from 'styled-components'

import {TextColor, LightTextColor, IconButton} from '../Home/styledComponents'
import {NavMenu} from '../Header/styledComponents'

export const FooterContainer = styled.div`
  padding-left: 10%;
`

export const ContactsContainer = styled(NavMenu)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 0px;
  margin: 20px 0px;
`

export const ContactBtn = styled(IconButton)`
  margin-right: 10px;
`

export const ContactImg = styled.img`
  width: 36px;
`

export const FooterText = styled.p`
  ${LightTextColor}
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const FooterTitle = styled(FooterText)`
  ${TextColor}
  font-weight: 600;
`
