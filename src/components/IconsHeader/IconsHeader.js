import './style.css'
import perfil from '../../assets/images/perfil.svg'
import sacola from '../../assets/images/sacola.svg'

const icons = [perfil, sacola]

function IconsHeader() {
  return (
    <ul className="icones">
      {icons.map((icon) => (
        <li className="icone">
          <img src={icon} />
        </li>
      ))}
    </ul>
  )
}

export default IconsHeader
