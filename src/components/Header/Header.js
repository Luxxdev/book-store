import IconsHeader from '../IconsHeader/IconsHeader'
import Logo from '../Logo/Logo'
import OptionsHeader from '../OptionsHeader/OptionsHeader'
import './style.css'

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  )
}

export default Header
