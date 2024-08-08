import './index.css'
import './reset.css'
import { Header, Home, About, Skills, Contact, Projects  } from './components'
import languages from './languages.json'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState(languages[0])
  const [visible, setVisible] = useState(true)
  
  return (
    <main id='main'>
      <Header visible={visible} setVisible={setVisible} language={language} setLanguage={setLanguage}></Header>

          <Home language={language}></Home>
          <About language={language}></About>
          <Skills language={language}></Skills>
          <Projects language={language}></Projects>
          <Contact language={language}></Contact>
  
    </main>
  )
}

export default App
