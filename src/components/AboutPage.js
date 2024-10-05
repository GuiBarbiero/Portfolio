import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />
   
        <Main>
  Olá, me chamo Guilherme Barbiero, tenho 18 anos e sou estudante de engenharia de software na FIAP. 
  Atualmente tenho me dedicado aos estudos de diversas áreas da tecnologia, como Dados, Java, Javascript, Python, C.R.U.D, e APIs. 
  Parte do meu aprendizado está dividido em múltiplas plataformas como NanoCourse FIAP, Alura, Fundação Bradesco, Udemy, e Digital Innovation One.
  <br /> <br />
  Além disso, possuo inglês avançado e espanhol básico. Estou sempre buscando aprimorar minhas habilidades e me aprofundar em novas tecnologias e metodologias para desenvolvimento.
  <br /> <br />
  
</Main>


        <BigTitle text="SOBRE MIM" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
