import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Coin from './Coin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Open from './Open';

function App() {
  return (<>
  <div style={{'height':'120vh'}}>
  <Coin/>
    <hr />
    <Open/>
  </div>
  </>
  );
}

export default App;
