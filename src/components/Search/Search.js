import styled from 'styled-components'
import Input from '../Input/Input'
import { useEffect, useState } from 'react'
import { getBooks } from '../../services/books'
import { postFavourite } from '../../services/Favourites'

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 400px;
  width: 100%;
`

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const SearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: '100%';
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`

function Search() {
  const [bookSearch, setBookSearch] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks() {
    const APIBooks = await getBooks()
    setBooks(APIBooks)
  }

  async function insertFavourite(id) {
    await postFavourite(id)
    alert('livro inserido')
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        onBlur={(event) => {
          const typedText = event.target.value
          const searchResult = books.filter((book) => book.name.includes(typedText))
          setBookSearch(searchResult)
        }}
        placeholder="Escreva sua próxima leitura"
      />
      {bookSearch.map(book => (
        <SearchResult onClick={() => insertFavourite(book.id)}>
          <img src={book.src}></img>
          <p>{book.name}</p>
        </SearchResult>
      ))}
    </SearchContainer>
  )
}

export default Search
