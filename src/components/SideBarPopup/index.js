import {withRouter} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import SideNavMenu from '../SideNavMenu'

import ThemeContext from '../../context/ThemeContext'

import {SideBar, CloseBtn} from './styledComponents'

const SideBarPopup = props => {
  const {children} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Popup trigger={children} modal overlay>
            {close => (
              <SideBar isDark={isDark}>
                <CloseBtn type="button" onClick={close}>
                  <IoMdClose size={24} color={isDark ? 'white' : 'black'} />
                </CloseBtn>
                <SideNavMenu type="small" />
              </SideBar>
            )}
          </Popup>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SideBarPopup)
