import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'

import SideBarPopup from '../SideBarPopup'

import ThemeContext from '../../context/ThemeContext'

import {
  NavHeader,
  NavContent,
  WebsiteLogo,
  NavMenu,
  NavMenuItem,
  NavItemBtn,
  NavItemImg,
  CustomLogoutBtn,
  ModalContainer,
  Modal,
  ModalTitle,
  ModalBtnsContainer,
  ModalBtn,
} from './styledComponents'

const LogoutBtnWithPopup = props => {
  const {onClickConfirm, children} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Popup trigger={children} modal overlay closeOnDocumentClick>
            {close => (
              <ModalContainer>
                <Modal isDark={isDark}>
                  <ModalTitle isDark={isDark}>
                    Are you sure you want to logout?
                  </ModalTitle>
                  <ModalBtnsContainer>
                    <ModalBtn type="button" onClick={close}>
                      Cancel
                    </ModalBtn>
                    <ModalBtn
                      type="button"
                      btnStyle="primary"
                      onClick={onClickConfirm}
                    >
                      Confirm
                    </ModalBtn>
                  </ModalBtnsContainer>
                </Modal>
              </ModalContainer>
            )}
          </Popup>
        )
      }}
    </ThemeContext.Consumer>
  )
}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, setTheme} = value

        const {websiteLogoUrl, themeIcon, iconColor} = isDark
          ? {
              websiteLogoUrl:
                'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
              themeIcon: <FiSun size={22} color="white" />,
              iconColor: 'white',
            }
          : {
              websiteLogoUrl:
                'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
              themeIcon: <FaMoon size={22} color="black" />,
              iconColor: 'black',
            }

        return (
          <NavHeader isDark={isDark}>
            <NavContent>
              <Link to="/">
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              </Link>
              <NavMenu display="sm">
                <NavMenuItem>
                  <NavItemBtn
                    type="button"
                    data-testid="theme"
                    onClick={setTheme}
                  >
                    {themeIcon}
                  </NavItemBtn>
                </NavMenuItem>
                <NavMenuItem>
                  <SideBarPopup>
                    <NavItemBtn type="button" aria-label="Menu">
                      <IoMenu size={30} color={iconColor} />
                    </NavItemBtn>
                  </SideBarPopup>
                </NavMenuItem>
                <NavMenuItem>
                  <LogoutBtnWithPopup onClickConfirm={onClickLogout}>
                    <NavItemBtn type="button">
                      <FiLogOut size={24} color={iconColor} />
                    </NavItemBtn>
                  </LogoutBtnWithPopup>
                </NavMenuItem>
              </NavMenu>
              <NavMenu display="lg">
                <NavMenuItem>
                  <NavItemBtn type="button" onClick={setTheme}>
                    {themeIcon}
                  </NavItemBtn>
                </NavMenuItem>
                <NavMenuItem>
                  <NavItemBtn type="button">
                    <NavItemImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavItemBtn>
                </NavMenuItem>
                <NavMenuItem>
                  <LogoutBtnWithPopup onClickConfirm={onClickLogout}>
                    <CustomLogoutBtn
                      type="button"
                      isDark={isDark}
                      onClick={onClickLogout}
                    >
                      Logout
                    </CustomLogoutBtn>
                  </LogoutBtnWithPopup>
                </NavMenuItem>
              </NavMenu>
            </NavContent>
          </NavHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
