/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../services/api";
import Pokeball from '../../assets/pokeball-png.png';
import { LoadMore, List, Container } from "./style";
import PokemonCard from "../PokemonCard";

function PokemonList() {

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
        <Container>
            <List>
                { pokemonsUrl.map((url) => (
                    <li key={url}><PokemonCard url={url} /></li>
                ))
                }
            </List>
            <LoadMore onClick={() => {
                setQntPokemon(qntPokemon + 15);
                console.log(pokemonsUrl)
            }}>
                Carregar mais Pokemons 
                <img src={Pokeball} alt="pokeboll" />   
            </LoadMore>
        </Container>
    );
}

export default PokemonList;