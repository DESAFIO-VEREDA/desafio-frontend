/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../services/api";

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
            <button onClick={() => {
                setQntPokemon(qntPokemon + 15);
                console.log(pokemonsUrl)
            }}>click me</button>
        </section>
    );
}

export default TmpPokemonList;