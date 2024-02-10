import ThemeContext from '../../context/ThemeContext/index'

import {
  FooterContainer,
  FooterTitle,
  ContactsContainer,
  ContactBtn,
  ContactImg,
  FooterText,
} from './styledComponents'

const Footer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <FooterContainer isDark={isDark}>
          <FooterTitle as="h1" isDark={isDark}>
            CONTACT US
          </FooterTitle>
          <ContactsContainer>
            <ContactBtn>
              <ContactImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </ContactBtn>
            <ContactBtn>
              <ContactImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </ContactBtn>
            <ContactBtn>
              <ContactImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactBtn>
          </ContactsContainer>
          <FooterText isDark={isDark}>
            Enjoy! Now to see your channels and recommendations!
          </FooterText>
        </FooterContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Footer
