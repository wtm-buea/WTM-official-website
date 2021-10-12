import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <a>
          <img src={logo} className="App-logo" alt="logo" />
          </a>
          <ul>
            <li><a class="active">Home</a></li>
            <li><a>About</a></li>
            <li><a>Events</a></li>
            <li><a>Success Stories</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
