import styled from 'styled-components'

import {IconButton} from '../Home/styledComponents'

import {ModalContainer} from '../Header/styledComponents'

export const SideBar = styled(ModalContainer)`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0px;
`

export const CloseBtn = styled(IconButton)`
  align-self: flex-end;
  margin: 40px;
`
