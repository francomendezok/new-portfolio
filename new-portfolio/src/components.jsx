/* eslint-disable react/prop-types */
import {useState, useEffect, useRef} from 'react';
import Arrows from './Arrows.jsx';
import projects from './projects.json';
import x from '/x.svg';
import linkedin from '/linkedin.svg';
import email from '/email.svg';
import github from '/github.svg';
import languages from './languages.json';


function Header ({language, setLanguage}) {
  const [flag, setFlag] = useState("/usa.png")

  function handleLanguageChange () {
    if (language === languages[0]) {
      setLanguage(languages[1])
      setFlag("/arg.png")
    }
    else {
      setLanguage(languages[0])
      setFlag("/usa.png")
    }
  }


  return (
    <header className='text-slate-50 w-full'>
      <Menu show={false}></Menu>
      <nav id="nav" className="hidden bg-transparent text-2xl w-screen h-screen items-center flex-col cursor-pointer justify-evenly bg-black sm:text-1xl sm:h-1/6 sm:flex sm:mt-4 max-3xl lg:text-4xl max-3xl">
          <div id="div-a" className="w-screen h-full flex flex-col items-center justify-evenly sm:flex-row sm:justify-evenly sm:items-center max-3xl">
            <a id="text-home" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#home">
              {language.home}
            </a>
            <a id="text-about" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#about">
            {language.about}
            </a>
            <a id="text-projects" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#projects">
            {language.projects}
            </a>
            <a id="text-contact" className="transform hover:scale-110 transition-transform ease-in-out duration-300" href="#contact">
            {language.contact}
            </a>
            <div className="rounded-md flex items-center">
              <img className="w-8 h-6 mr-4" id="flag" src={flag} alt="Language Flag" />
              <select value={language} onChange={handleLanguageChange} id="select-flag" className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" name="language">
                <option className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" value="EN">
                  {language.english}
                </option>
                <option className="cursor-pointer text-slate-200 bg-black text-1xl text-center align-middle" value="SP">
                  {language.spanish}
                </option>
              </select>
            </div>
          </div>
      </nav>
    </header>
  )
}
function Menu({show}) {
    if (show) {
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
      )
    }
}

function Home({language}) {
  return (
    <div id="home" className="text-slate-50 flex flex-col justify-center items-center h-screen w-screen sm:justify-around max-3xl">
      <h1 className="relative z-20 left-1 top-0 text-3xl sm:top-4 sm:right-36 sm:text-6xl md:mt-10 lg:-left-24 lg:mt-8 lg:text-7xl lg:overflow-visible max-3xl">
        FRANCO MENDEZ
      </h1>
      <h2 id="web-developer" className="relative z-20 text-2xl sm:text-4xl sm:bottom-14 sm:left-24 max-3xl md:top-44 max-3xl lg:left-40 md:mb-60 lg:top-32 md:text-5xl max-3xl">
        {language.webDeveloper}
      </h2>
    </div>
  );
}


function About({ language }) {
  const textP1Ref = useRef(null);
  const textP2Ref = useRef(null);
  const textP3Ref = useRef(null);
  const textP4Ref = useRef(null);

  useEffect(() => {
    if (textP1Ref.current) textP1Ref.current.innerHTML = language.textP1;
    if (textP2Ref.current) textP2Ref.current.innerHTML = language.textP2;
    if (textP3Ref.current) textP3Ref.current.innerHTML = language.textP3;
    if (textP4Ref.current) textP4Ref.current.innerHTML = language.textP4;
  }, [language]);

  return (
    <section id="about" className="w-screen h-full flex flex-col items-center md:flex-row md:items-center md:justify-center max-3xl">
      <div id="pic-container">
        <div id="pic-container" className="flex flex-col items-center">
          <h3 id="text-title" className="mb-4 text-center text-slate-300 text-4xl md:text-5xl md:mb-8 max-3xl">
            {language.presentation}
          </h3>
          <img src="/profile-pic.png" alt="" className="mb-4 rounded-full w-40 h-40 md:h-44 md:w-44 max-3xl" />
        </div>
      </div>
      <div
        id="presentation-div"
        className="flex flex-col justify-center w-3/4 text-center text-slate-300 text-2xl md:text-left md:ml-4 md:mr-4"
      >
        <p id="text-p-1" ref={textP1Ref}></p>
        <p id="text-p-2" className="pt-4" ref={textP2Ref}></p>
        <p id="text-p-3" className="pt-4" ref={textP3Ref}></p>
        <p id="text-p-4" className="pt-4" ref={textP4Ref}></p>
      </div>
    </section>
  );
}


function Skills({language}) {
  return (
    <section id="skills" className="h-screen w-screen">
      <p id="p-skills" className="text-center text-slate-300 text-5xl mt-8 mb-8 md:mt-24 max-3xl">
        {language.skills}
      </p>
      <div
        id="skills-box"
        className="flex flex-wrap w-1/2 h-1/2 items-center m-auto justify-around md:flex-row md:h-full max-3xl md:justify-center lg:justify-evenly"
      >
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/js.png" alt="" />
          <p className="text-center text-slate-300 mt-4">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:-rotate-6">
          <img src="/html.png" alt="" />
          <p className="text-center text-slate-300 mt-4">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/css.png" alt="" />
          <p className="text-center text-slate-300 mt-4">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/tailwindcss.png" alt="" />
          <p className="text-center text-slate-300 mt-4">TAILWIND CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:-rotate-6">
          <img src="/react.webp" alt="" />
          <p className="text-center text-slate-300 mt-4">REACT</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/csharp.webp" alt="" />
          <p className="text-center text-slate-300 mt-4">C#</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/sql.png" alt="" />
          <p className="text-center text-slate-300 mt-4">SQL</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl h-20 w-20 md:h-40 md:w-40 max-3xl transform hover:scale-105 ease-in-out cursor-pointer hover:rotate-6">
          <img src="/node.png" alt="" />
          <p className="text-center text-slate-300 mt-4">NODE</p>
        </div>
      </div>
    </section>
  );
}

function Contact ({language}) {
  return (
    <section id="contact" className="text-3xl text-center h-1/2 w-screen md:mt-12 md:text-5xl max-3xl">
        <h3 id="text-contact-h3">{language.contact}</h3>
        <div id="social-icons" className="grid grid-cols-2 md:mt-8 md:mb-8 md:flex md:items-center md:justify-evenly max-3xl">
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://twitter.com/francomendezok"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src={x} alt=""/>X</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://linkedin.com/in/franco-mendez-a462b7235"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src={linkedin} alt=""/>Linkedin</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="https://github.com/francomendezok"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src={github} alt=""/>Github</a>
                </div>
                <div className="transform hover:scale-110 transition-transform ease-in-out duration-300 hover:text-cyan-300 flex items-center justify-center mt-4 text-center text-2xl md:text-3xl max-3xl">
                    <a className="w-full flex flex-col items-center" target="_blank" href="mailto:francomendezok@gmail.com"><img className="w-12 h-12 md:w-24 md:h-24 md:mb-4 max-3xl" src={email} alt=""/>Email</a>
                </div>
        </div>
        <p className="mt-4 mb-4 text-2xl"><span className="text-3xl">2024 Franco Mendez</span></p>
    </section> 
  )
}

function Projects({language}) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
      const interval = setTimeout(() => {
          setPosition(prevPosition => (prevPosition + 1) % projects.length);
      }, 5000);

      return () => clearTimeout(interval);
  }, [position]);

  return (
      <div>
          <div id='projects'>
          <h3 id="p-projects" className="text-slate-300 text-5xl text-center mb-16">{language.projects}</h3>
              <img id='project-img' src={projects[position].img} alt={`${projects[position].title} store`} />
                <p id="project-title" className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-cyan-300 md:text-1xl lg:text-2xl max-3xl">{projects[position].title}</p>
              <div className="m-auto md:flex md:w-1/3 md:justify-around lg:justify-evenly xl:justify-center xl:space-x-4 max-3xl">
                <a id="live-repo" target="_blank" href={projects[position].repo} className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-cyan-300 md:text-1xl lg:text-2xl max-3xl">{language.liveRepo}</a>
                <a id="live-web" target="_blank" href={projects[position].web} className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:text-cyan-300 md:text-1xl lg:text-2xl max-3xl">{language.liveWeb}</a>
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
              <div id={position === 8 ? 'radio-item-selected' : ''} className='position-div'></div>
              <div id={position === 9 ? 'radio-item-selected' : ''} className='position-div'></div>
          </div>
      </div>
  );
}

export {Header, Home, About, Skills, Contact, Projects}
