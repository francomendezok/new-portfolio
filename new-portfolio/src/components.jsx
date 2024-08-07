import {useState, useEffect} from 'react';
import Arrows from './Arrows.jsx';
import projects from './projects.json';


function Franco () {
  return (
    <header className='text-slate-50 w-full'>
      <nav id="nav" className="hidden bg-transparent text-2xl w-screen h-screen items-center flex-col cursor-pointer justify-evenly bg-black sm:text-1xl sm:h-1/6 sm:flex sm:mt-4 max-3xl lg:text-4xl max-3xl">
          <div id="div-a" className="w-screen h-full flex flex-col items-center justify-evenly sm:flex-row sm:justify-evenly sm:items-center max-3xl">
            <a id="text-home" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#home">
              Home
            </a>
            <a id="text-about" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#about">
              About
            </a>
            <a id="text-projects" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#projects">
              Projects
            </a>
            <a id="text-contact" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#contact">
              Contact
            </a>
            <div className="rounded-md flex items-center">
              <img className="w-8 h-6 mr-4" id="flag" src="./public/usa.png" alt="Language Flag" />
              <select id="select-flag" className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" name="language">
                <option className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" value="EN">
                  English
                </option>
                <option className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" value="SP">
                  Spanish
                </option>
              </select>
            </div>
          </div>
      </nav>
    </header>
  )
}

function Header() {
  return (
    <header className="fixed h-10 bg-transparent w-screen z-20 sm:hidden max-3xl">
      <svg
        id="menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="relative float-right mr-4 mt-4 w-8 h-8 sm:border-4 sm:border-red-500 max-3xl"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

    </header>
  );
}

function Home() {
  return (
    <div id="home" className="text-slate-50 flex flex-col justify-center items-center h-screen w-screen sm:justify-around max-3xl">
      <h1 className="relative z-20 left-1 top-0 text-3xl sm:top-4 sm:right-36 sm:text-6xl md:mt-10 lg:-left-24 lg:mt-8 lg:text-7xl lg:overflow-visible max-3xl">
        FRANCO MENDEZ
      </h1>
      <h2
        id="web-developer"
        className="relative z-20 text-2xl sm:text-4xl sm:bottom-14 sm:left-24 max-3xl md:top-44 max-3xl lg:left-40 md:mb-60 lg:top-32 md:text-5xl max-3xl"
      >
        WEB DEVELOPER
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="w-screen h-full flex flex-col items-center md:flex-row md:items-center md:justify-center max-3xl">
      <div id="pic-container">
        <div id="pic-container" className="flex flex-col items-center">
          <h3 id="text-title" className="mb-4 text-center text-slate-300 text-4xl md:text-5xl md:mb-8 max-3xl">
            I am Franco!
          </h3>
          <img src="./images/profile-pic.png" alt="" className="mb-4 rounded-full w-40 h-40 md:h-44 md:w-44 max-3xl" />
        </div>
      </div>
      <div
        id="presentation-div"
        className="flex flex-col justify-center w-3/4 text-center text-slate-300 text-2xl md:text-left md:ml-4 md:mr-4"
      >
        <p id="text-p-1">
          I am a Front-End Developer from{' '}
          <span id="text-span-1" style={{ color: '#18bdec', fontWeight: 500 }}>
            Argentina
          </span>{' '}
          who loves to learn and create with new technologies.
        </p>
        <p id="text-p-2" className="pt-4">
          My focus is{' '}
          <span id="text-span-2" style={{ color: '#18bdec', fontWeight: 500 }}>
            Business
          </span>{' '}
          and{' '}
          <span id="text-span-3" style={{ color: '#18bdec', fontWeight: 500 }}>
            Marketing-driven,
          </span>{' '}
          so I can help your Business with a new{' '}
          <span id="text-span-4" style={{ color: '#18bdec', fontWeight: 500 }}>
            Website
          </span>
          , Landing page, Form, or interface that you might need to implement.
        </p>
        <p id="text-p-3" className="pt-4">
          Also, I know the importance of a{' '}
          <span id="text-span-5" style={{ color: '#18bdec', fontWeight: 500 }}>
            Great Design
          </span>
          , fast and{' '}
          <span id="text-span-6" style={{ color: '#18bdec', fontWeight: 500 }}>
            Responsive Website
          </span>{' '}
          and good{' '}
          <span id="text-span-7" style={{ color: '#18bdec', fontWeight: 500 }}>
            SEO
          </span>
          .
        </p>
        <p id="text-p-4" className="pt-4">
          I find coding to be a useful tool for providing clients with the right{' '}
          <span id="text-span-8" style={{ color: '#18bdec', fontWeight: 500 }}>
            solutions
          </span>{' '}
          to their problems. My focus is always on creating a better{' '}
          <span id="text-span-9" style={{ color: '#18bdec', fontWeight: 500 }}>
            User Experience
          </span>{' '}
          above all.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="h-screen w-screen">
      <p id="p-skills" className="text-center text-slate-300 text-5xl mt-8 mb-8 md:mt-24 max-3xl">
        Skills
      </p>
      <div
        id="skills-box"
        className="flex flex-col h-3/4 items-center justify-around md:flex-row md:h-full max-3xl md:justify-center lg:justify-evenly"
      >
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="./images/js.png" alt="" />
          <p className="text-center text-slate-300 mt-4">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:-rotate-6">
          <img src="./images/html.png" alt="" />
          <p className="text-center text-slate-300 mt-4">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="./images/css.png" alt="" />
          <p className="text-center text-slate-300 mt-4">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:-rotate-6">
          <img src="./images/react.png" alt="" />
          <p className="text-center text-slate-300 mt-4">REACT</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="./images/bootstrap.png" alt="" />
          <p className="text-center text-slate-300 mt-4">BOOTSTRAP</p>
        </div>
      </div>
    </section>
  );
}

function Projects () {
  return (
    <section id="projects" className="h-screen w-screen md:mt-64 max-3xl">
        <h3 id="p-projects" className="text-slate-300 text-5xl text-center">Projects</h3>
        <img id="blue-bgc" className="md:bg-black md:opacity-50 md:relative md:-z-40 md:w-full md:m-auto md:h-full max-3xl" src="./images/test.webp" alt=""/>
        <div id="my-project" className="flex flex-col items-center justify-center text-center md:relative md:bottom-full md:mt-24 max-3xl">
            <img className="w-80 h-80 rounded-3xl border-2 border-slate-700 transform hover:scale-105 ease-in-out duration-500 cursor-pointer xs:w-72 xs:h-72 md:h-96 md:w-96 max-3xl" id="my-img" src="" alt=""/>
            <p className="text-3xl mt-4 mb-2 md:text-4xl max-3xl" id="my-title"></p>
             <div className="md:flex md:w-1/3 md:justify-around lg:justify-evenly xl:justify-center xl:space-x-4 max-3xl">
                <a id="live-repo" target="_blank" href="" className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-cyan-300 md:text-1xl lg:text-2xl max-3xl">Live Repo</a>
                <a id="live-web" target="_blank" href="" className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-cyan-300 md:text-1xl lg:text-2xl max-3xl">View Project</a>
            </div>
        </div>
        <div id="dots" className="flex justify-center items-center mt-4 mb-4 md:relative md:bottom-full max-3xl">
            <input data-number="0" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="1" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="2" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="3" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="4" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="5" name="selected" type="radio" className="md:transform scale-110"/>
            <input data-number="6" name="selected" type="radio" className="md:transform scale-110"/>
        </div>
    </section> 
  )
}

function Contact () {
  return (
    <section id="contact" className="text-3xl text-center h-1/2 w-screen md:mt-12 md:text-5xl max-3xl">
        <h3 id="text-contact-h3">Contact</h3>
        <div id="social-icons" className="grid grid-cols-2 md:mt-8 md:mb-8 md:flex md:items-center md:justify-evenly max-3xl">
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://twitter.com/francomendezok"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src="./images/Twitter_white.png" alt=""/>Twitter</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://linkedin.com/in/franco-mendez-a462b7235"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src="./images/LinkedIN_white.png" alt=""/>Linkedin</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://github.com/francomendezok"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src="./images/Github_white.png" alt=""/>Github</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="mailto:francomendezok@gmail.com"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src="./images/Gmail_white.png" alt=""/>Email</a>
                </div>
        </div>
        <p className="mt-4 mb-4 text-2xl"><span className="text-3xl">2023</span> Franco Mendez</p>
    </section> 
  )
}

function Footer() {
  return (
    <footer className="h-16 w-screen bg-transparent flex justify-center items-center sm:hidden max-3xl">
      <p className="text-slate-300 text-xl">Created by Franco Mendez</p>
    </footer>
  );
}

function OurStores() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
      const interval = setTimeout(() => {
          setPosition(prevPosition => (prevPosition + 1) % projects.length);
      }, 5000);

      return () => clearTimeout(interval);
  }, [position]);

  return (
      <div>
         
          <div id='store'>
              <img src={projects[position].img} alt={`${projects[position].city} store`} />
              <div className='city-info-container'>
                  <a className='flex gap-2 items-center cursor-pointer'>{projects[position].city}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.74342 8.97186L8.68751 3.02777M8.68751 3.02777L4.03349 2.19495M8.68751 3.02777L9.52033 7.68179" stroke="#452B1A"></path>
                              <path d="M2 11.1233H10.41" stroke="#452B1A"></path>
                      </svg>
                  </a>
                  <div className='stores-info-box'>
                      <div className='address-box'>
                          <p>{projects[position].street}</p>
                          <p>{projects[position].zip}</p>
                      </div>
                      <div className='days-box'>
                          <p>{projects[position].weekdays}</p>
                          {position === 5 ? <p>{projects[position].saturday}</p> : null}
                          <p>{projects[position].sunday}</p>
                      </div>
                      <div className='hs-box'>
                          <p>{projects[position]['hs-weekdays']}</p>
                          {position === 5 ? <p>{projects[position]['hs-saturday']}</p> : null}
                          <p>{projects[position]['hs-sunday']}</p>
                      </div>
                  </div>
              </div>
              <div className='arrow'>
                  <Arrows position={position} setPosition={setPosition} side='left' />
                  <Arrows position={position} setPosition={setPosition} side='right' />
              </div>
          </div>
          <div className='carrousel-position'>
              <div id={position === 0 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 1 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 2 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 3 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 4 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 5 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 6 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 7 ? 'radio-item-selected' : ''} className='position-div'></div>
          </div>
      </div>
  );
}



export {Franco, Header, Home, About, Skills, Projects, Contact, Footer, OurStores}
