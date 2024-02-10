import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled(Flex)`
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`

export const FormContainer = styled(Flex)`
  width: 90%;
  max-width: 350px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);

  @media screen and (min-width: 768px) {
    width: 400px;
    max-width: unset;
    padding: 36px 48px 36px 48px;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 130px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 168px;
    margin-bottom: 26px;
  }
`

export const InputContainer = styled(Flex)`
  align-items: stretch;
  align-self: stretch;
  margin-top: 20px;
`

export const CustomLabel = styled.label`
  color: ${props => (props.isDark ? '#f4f4f4' : '#94a3b8')};
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 16px;
`

export const CustomInput = styled.input`
  color: ${props => (props.isDark ? '#f4f4f4' : '#475569')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  font-size: 14px;
  height: 40px;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const CheckboxInputContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 12px;
`

export const CustomCheckboxInput = styled.input`
  transform: scale(1.2);
  margin-right: 10px;
`

export const CustomCheckboxLabel = styled.label`
  color: ${props => (props.isDark ? '#f4f4f4' : '#475569')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 16px;
`

export const LoginBtn = styled.button`
  height: 40px;
  width: 100%;
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 2px;
`

export const Text = styled.p`
  color: #ff0b37;
  align-self: flex-start;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 16px;
  margin-top: 9px;
  margin-bottom: 0px;
`
