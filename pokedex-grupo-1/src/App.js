import './App.css';
import PokemonCard from './components/PokemonCard'

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={{ name: 'charmander', sprites: { front_defaul: 'url'}}} />
    </div>
  );
}

export default App;
