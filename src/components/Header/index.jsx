import { Container } from "./style"
import Logo from "./../../assets/Photo_of_profile.jpg"

function Header(){
  return(
    <Container>
      <img src={Logo} alt="Foto-de-perfil" />
      <h1>Pedro Rafael</h1>
      <p>Desenvolvedor Front-End | 18 anos</p>
    </Container>
  )
}

export default Header