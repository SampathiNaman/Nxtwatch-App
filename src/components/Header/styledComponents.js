import styled from 'styled-components'

import {Button, IconButton} from '../Home/styledComponents'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const WebsiteLogo = styled.img`
  width: 110px;
`

export const NavMenu = styled.ul`
  display: ${props => (props.display === 'sm' ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  flex: 1;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    display: ${props => (props.display === 'sm' ? 'none' : 'flex')};
  }
`

export const NavMenuItem = styled.li`
  margin: 10px;
  text-decoration: none;
`

export const NavItemBtn = styled(IconButton)``

export const CustomLogoutBtn = styled(Button)`
  font-size: 12px;
  padding: 4px 18px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  border-radius: 4px;
`

export const NavItemImg = styled.img`
  width: 26px;
`

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #00000088;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
`

export const Modal = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 10px;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 30px 60px;
  }
`

export const ModalTitle = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`

export const ModalBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`

export const ModalBtn = styled(Button)`
  color: ${props => (props.btnStyle === 'primary' ? '#ffffff' : '#94a3b8')};
  background: ${props =>
    props.btnStyle === 'primary' ? '#3b82f6' : 'transparent'};
  border: ${props =>
    props.btnStyle === 'primary' ? 'none' : '1px solid #94a3b8'};
  border-radius: 2px;
`

export const MenuItem = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  padding: 10px 0px;
  margin: 0px;
  margin-left: 10px;
`
