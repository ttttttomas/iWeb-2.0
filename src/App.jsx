import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 


function SpanishPage() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is 1
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href="/en">Pagina en Ingles</a>
      <a href="/pt">Pagina en Pete</a>

    </>
  )
}

function EnglishPage() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          Contador es 1
        </button>
        <p>
          Editá <code>src/App.jsx</code> y guarda.
        </p>
      </div>
      <p className="read-the-docs">
        Clickea en el logo de React o Vite para mas info.
      </p>
      <a style={display.block} href="/">Pagina en Español</a>
      <a href="/">Pagina en Pete</a>
    </>
  )
}

function PortuguesPage() {
  return (
    <>
    <h1>Hola!</h1>
    <a href="/pt"></a>
    </>
  )
}

function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname)

  return(
    <main>
      {currentPath === '/' && <SpanishPage />}
      {currentPath === '/en' && <EnglishPage />}
      {currentPath === '/pt' && <PortuguesPage />}

    </main>
  )
}

export default App
