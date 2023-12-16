import Header from "../components/Header"
import { Container } from "./style"
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home(){

  const Social = [
    {id: 1,icon: FaGithub, urlName : "GitHub", url : "https://github.com/PedroRafael13"},
    {id: 2,icon: FaLinkedin ,urlName : "Linkedin", url : "https://www.linkedin.com/in/pedro-rafael13/"},
    {id: 3,icon: FaEnvelope, urlName : "Email", url : "mailto:pedrorafaeldsn12@gmail.com"},
    {id: 4,icon: FaXTwitter, urlName : "Twitter", url : "https://twitter.com/pedrowski_011"},
    {id: 5,icon: FaInstagram, urlName : "Instagram", url : "https://www.instagram.com/elraws_/"}
  ]

  const Links = Social.map((props) => 
    <div key={props.id}>
      <a href={props.url}> <props.icon/> {props.urlName}</a>
    </div>
  )

  return(
    <Container>
      <Header />
      {Links}
    </Container>
  )
}

/*
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
*/

export default Home