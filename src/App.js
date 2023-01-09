import './App.css';

import Header from './components/Header';


function App() {
  return (
    <div className='App'>
      <div className='container'> 
        <div className='column' id='1'></div>
        <div className='column' id='2'>
          <Header/>
          <div className='about-me'>
            about me
          </div>
          <div className='my-skills'>
            my skills
          </div>
          <div className='my-projects'>
            my projects
          </div>
          <div className='contact-me'>
            contact me
          </div>
          </div>
        <div className='column' id='3'></div>
      </div>
    </div>
  )
}


export default App;