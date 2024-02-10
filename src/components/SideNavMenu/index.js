import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {MenuItem} from '../Header/styledComponents'

import {SideBarMenu, SideBarMenuItem} from './styledComponents'

const sideBarMenuItemsList = [
  {
    icon: IoMdHome,
    name: 'Home',
    id: 'HOME',
    linkTo: '/',
  },
  {
    icon: FaFire,
    name: 'Trending',
    id: 'TRENDING',
    linkTo: '/trending',
  },
  {
    icon: SiYoutubegaming,
    name: 'Gaming',
    id: 'GAMING',
    linkTo: '/gaming',
  },
  {
    icon: RiMenuAddFill,
    name: 'Saved Videos',
    id: 'SAVED_VIDEOS',
    linkTo: '/saved-videos',
  },
]

class SideNavMenu extends Component {
  state = {activeTabId: ''}

  setActiveTabId = tabId => this.setState({activeTabId: tabId})

  componentDidMount = () => {
    const {match} = this.props
    const {path} = match
    const activeTabIndex = sideBarMenuItemsList.findIndex(
      menuItem => menuItem.linkTo === path,
    )
    this.setState({
      activeTabId:
        activeTabIndex === -1 ? '' : sideBarMenuItemsList[activeTabIndex].id,
    })
  }

  render() {
    const {activeTabId} = this.state
    const {type} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarMenu type={type}>
              {sideBarMenuItemsList.map(menuItem => {
                const {id, icon, name, linkTo} = menuItem
                const Icon = icon
                return (
                  <Link to={linkTo} key={id} style={{textDecoration: 'none'}}>
                    <SideBarMenuItem
                      isActive={id === activeTabId}
                      isDark={isDark}
                      type={type}
                      onClick={() => this.setActiveTabId(id)}
                    >
                      <Icon
                        size={20}
                        color={id === activeTabId ? 'red' : 'grey'}
                      />
                      <MenuItem isDark={isDark} isActive={id === activeTabId}>
                        {name}
                      </MenuItem>
                    </SideBarMenuItem>
                  </Link>
                )
              })}
            </SideBarMenu>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideNavMenu)
