import styled from 'styled-components'
import IconsHeader from '../IconsHeader/IconsHeader'
import Logo from '../Logo/Logo'
import OptionsHeader from '../OptionsHeader/OptionsHeader'
import { Link } from 'react-router-dom'

const AppHeader = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <AppHeader>
      <Link to={'/'}>
        <Logo />
      </Link>
      <OptionsHeader />
      <IconsHeader />
    </AppHeader>
  )
}

export default Header
