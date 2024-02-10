import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext/index'

import {
  LoginFormContainer,
  FormContainer,
  LoginWebsiteLogo,
  InputContainer,
  CustomLabel,
  CustomInput,
  CheckboxInputContainer,
  CustomCheckboxInput,
  CustomCheckboxLabel,
  LoginBtn,
  Text,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderShowPasswordCheckboxField = () => {
    const {showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <CustomCheckboxInput
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={this.onChangeShowPassword}
              />
              <CustomCheckboxLabel isDark={isDark} htmlFor="showPassword">
                Show Password
              </CustomCheckboxLabel>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <CustomLabel isDark={isDark} htmlFor="password">
                PASSWORD
              </CustomLabel>
              <CustomInput
                type={showPassword ? 'text' : 'password'}
                id="password"
                isDark={isDark}
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <CustomLabel isDark={isDark} htmlFor="username">
                USERNAME
              </CustomLabel>
              <CustomInput
                type="text"
                id="username"
                isDark={isDark}
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const websiteLogoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginFormContainer isDark={isDark}>
              {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        /> */}
              <FormContainer
                as="form"
                onSubmit={this.submitForm}
                isDark={isDark}
              >
                <LoginWebsiteLogo src={websiteLogoUrl} alt="website logo" />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <CheckboxInputContainer>
                  {this.renderShowPasswordCheckboxField()}
                </CheckboxInputContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {showSubmitError && <Text>*{errorMsg}</Text>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )

    //     <ThemeContext.Consumer>
    //     {value => {
    //         const {isDark} = value
    //     }}
    // </ThemeContext.Consumer>
  }
}

export default LoginForm
