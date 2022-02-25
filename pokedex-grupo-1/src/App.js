import PokemonCard from './components/PokemonCard'
import TmpPokemonCard from './components/TmpPokemonCard';
import TmpPokemonList from './components/TmpPokemonList';
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <PokemonCard pokemon={{ name: 'charmander', 
      types: [ { name: 'fire' }],
      sprites: { 
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
        }} />
      <TmpPokemonList />
      <TmpPokemonCard />
    </div>
  )
}

export default App;

/*

*/