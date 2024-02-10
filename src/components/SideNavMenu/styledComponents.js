import styled from 'styled-components'

import {NavMenu, NavMenuItem} from '../Header/styledComponents'

export const SideBarMenu = styled(NavMenu)`
  flex: ${props => (props.type === 'large' ? 0 : 0.5)};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  padding: 0px;
`

export const SideBarMenuItem = styled(NavMenuItem)`
  background-color: ${props => {
    const {isActive, isDark} = props
    if (isActive) {
      return isDark ? '#313131' : '#f1f5f9'
    }
    return 'transparent'
  }};
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: ${props => (props.type === 'large' ? '10%' : '36%')};
  margin: 0px;

  &:hover {
    background-color: ${props => (props.isDark ? '#313131' : '#f1f5f9')};
  }
`
