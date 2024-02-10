import ThemeContext from '../../context/ThemeContext/index'
import {TitleContainer, IconContainer, Title} from './styledComponents'

const ComponentTitle = props => {
  const {icon, title} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TitleContainer isDark={isDark} data-testid="banner">
            <IconContainer isDark={isDark}>{icon}</IconContainer>
            <Title isDark={isDark}>{title}</Title>
          </TitleContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ComponentTitle
