/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../services/api";
import Pokeball from '../../assets/pokeball-png.png';
import { LoadMore } from "./style";

function TmpPokemonList() {

    const [pokemonsUrl, setPokemonsUrl ] = useState([]);
    const [qntPokemon, setQntPokemon ] = useState(0);

    async function getAllNames(){
        let endPoint = `pokemon?limit=15&offset=${qntPokemon}`;
        let totalUrl = [];
        await api.get(endPoint)
            .then((res) => {
                let data = res.data.results;
                let tmpUrl = data.map(pokemon => {
                    return pokemon.url
                });
                totalUrl.push(...pokemonsUrl, ...tmpUrl)
                setPokemonsUrl(totalUrl)   
            })
    }
    useEffect(() => {
        getAllNames()
    }, [qntPokemon])
    return (
        <section>
            <h2>Test new component</h2>
            <LoadMore onClick={() => {
                setQntPokemon(qntPokemon + 15);
                console.log(pokemonsUrl)
            }}>
                Carregar mais Pokemons 
                <img src={Pokeball} alt="pokeboll" />   
            </LoadMore>
        </section>
    );
}

export default TmpPokemonList;