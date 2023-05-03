import '../Home.css'
import '../App.css';
import Home from './Home';
import Card from './ArtCard'
// import ArtworksList from './ArtworksList';

function App() {
  return (
    <div className="App">
    
     <Home />
    {/* <ArtworksList />  */}
    <Card/>
    </div>
  );
}

export default App;
