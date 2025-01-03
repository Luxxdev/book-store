import styled from 'styled-components'
import Search from '../components/Search/Search'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  li {
    list-style: none;
  }
`

function Favourites() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  )
}

export default Favourites
