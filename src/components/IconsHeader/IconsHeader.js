import perfil from '../../assets/images/perfil.svg'
import sacola from '../../assets/images/sacola.svg'
import styled from 'styled-components'

const icons = [perfil, sacola]

const Icons = styled.ul`
  display: flex;
  align-items: center;
`
const Icon = styled.li`
  margin-right: 40px;
`

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt="icon" />
        </Icon>
      ))}
    </Icons>
  )
}

export default IconsHeader
