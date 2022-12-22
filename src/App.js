// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import './Component/Search.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Home/>
       
      </header>
    </div>
  );
}

export default App;
