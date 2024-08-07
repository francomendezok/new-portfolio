import './index.css'
import './reset.css'
import { Header, Home, About, Skills, Contact, OurStores  } from './components'

function App() {

  return (
    <main id='main'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <OurStores></OurStores>
      <Contact></Contact>
    </main>
  )
}

export default App
