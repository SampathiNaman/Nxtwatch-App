import styled from 'styled-components'

export const SideBarLargeContainer = styled.div`
  height: 100%;
  width: 260px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
`
