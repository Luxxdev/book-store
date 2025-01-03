import { Link } from 'react-router-dom'
import styled from 'styled-components'

const textOptions = ['CATEGORIES', 'FAVOURITES', 'SHELF']

const Options = styled.ul`
  display: flex;
`

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Link to={`/${text.toLocaleLowerCase()}`}>
          <Option>
            <p>{text}</p>
          </Option>
        </Link>
      ))}
    </Options>
  )
}

export default OptionsHeader
