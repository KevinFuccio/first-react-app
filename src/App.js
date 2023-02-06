import logo from './logo.svg';
import './App.css';
import doge from './img/c09.jpg'
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ImageComponent img={doge} alt="image of a beautiful dog" width="350"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ButtonComponent title ="CIAO RAGA" color ="red"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
