import PokemonCard from './components/PokemonCard'
import TmpPokemonCard from './components/TmpPokemonCard';
import TmpPokemonList from './components/TmpPokemonList';
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <TmpPokemonList />
      <TmpPokemonCard />
    </div>
  )
}

export default App;

/*

*/