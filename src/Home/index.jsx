import Header from "../components/Header"
import { Container, Ul } from "./style"
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home(){
  return(
    <Container>
      <Header />
      <Ul>
        <li>
          <a href="https://github.com/PedroRafael13"><FaGithub/>GitHub</a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/pedro-rafael13/"><FaLinkedin/>Linkedin</a>
        </li>
        <li>
        <a href="mailto:pedrorafaeldsn12@gmail.com"><FaEnvelope/>Email</a>
        </li>
        <li>
        <a href="https://twitter.com/pedrowski_011"><FaXTwitter/>Twitter</a>
        </li>
        <li>
        <a href="https://www.instagram.com/elraws_/"><FaInstagram/>Instagram</a>
        </li>
      </Ul>
    </Container>
  )
}

export default Home