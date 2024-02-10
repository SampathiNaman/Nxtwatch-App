import SideNavMenu from '../SideNavMenu'
import Footer from '../Footer'

import ThemeContext from '../../context/ThemeContext'

import {SideBarLargeContainer} from './styledComponents'

const SideBarLarge = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideBarLargeContainer isDark={isDark}>
          <SideNavMenu type="large" />
          <Footer />
        </SideBarLargeContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBarLarge
