import '/src/components/Cuerpo/Cuerpo.css';

function Cuerpo(){
    return (
                
        <div className="App">
        <header className="App-header">
          <img id="logoReact" src="https://i.ibb.co/CwqhxHZ/logo-React.png" />
          <p>Hello Vite + React!</p>
         
          <p>
            Edit <code>App.jsx</code> and Re-Subido a Git Pages.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
  )
}

export default Cuerpo