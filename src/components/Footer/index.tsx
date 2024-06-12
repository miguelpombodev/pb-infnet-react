import { FaGithub } from "react-icons/fa";
import { Container, FooterCompanyRights,FooterInfos } from "./style"

function Footer () {
  return (
    <Container>
      <FooterCompanyRights>
        <span>App desenvolvido por <a href="https://github.com/miguelpombodev"><FaGithub size={15}/>Miguel Pombo</a></span>
      </FooterCompanyRights>
      <FooterInfos>
        <span>Termos e Regras</span>
        <span>Política de Privacidade</span>
        <span>Ajuda</span>
        <span>Portal Forum Gamer</span>
      </FooterInfos>
    </Container>
  )
}

export default Footer