import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"

const Container = styled.div`
  height:100vh;
  color: white;
  background: url('./images/bg.jpeg');
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none; //hide scrollbar on firefox
  &::-webkit-scrollbar{
    display: none;
  } //for google chrome
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App