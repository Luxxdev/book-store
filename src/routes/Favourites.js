import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteFavourite, getFavourites } from '../services/Favourites'
import livroImg from '../assets/images/livro.png'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favourites() {
  const [favourites, setFavourites] = useState([])

  async function fetchFavourites() {
    const favouritesAPI = await getFavourites()
    setFavourites(favouritesAPI)
  }

  async function removeFavourite(id) {
    await deleteFavourite(id)
    await fetchFavourites()
    alert('livro removido')
  }

  useEffect(() => {
    fetchFavourites()
  }, [])

  return (
    <AppContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {
            favourites.length !== 0 ? favourites.map(fav => (
              <Result onClick={() => removeFavourite(fav.id)}>
                <p>{fav.name}</p>
                <img src={livroImg} />
              </Result>
            )) : null
          }
        </ResultContainer>
      </div>
    </AppContainer>
  )
}

export default Favourites
