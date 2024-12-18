import styled from 'styled-components'
import IconsHeader from '../IconsHeader/IconsHeader'
import Logo from '../Logo/Logo'
import OptionsHeader from '../OptionsHeader/OptionsHeader'

const AppHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <AppHeader>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </AppHeader>
  )
}

export default Header
