import './App.css';
import PokemonCard from './components/PokemonCard'
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <PokemonCard pokemon={{ name: 'charmander', sprites: { front_defaul: 'url'}}} />
    </div>
  )
}

export default App;
