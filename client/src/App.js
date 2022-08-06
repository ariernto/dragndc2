import Home from './screens/Home/Home';
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Creator" element={<h1>Character Creation</h1>} />
        <Route path='/Characters' element={<h1>My Characters</h1>} />
      </Routes>
    </div>
  );
}

export default App;
