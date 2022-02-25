import axios from 'axios';
import { useEffect, useState } from 'react';
import { getColorPokemon } from '../../utils/getColorPokemon';

function TmpPokemonCard() {
    const [handler, setH ] = useState(0);
    const [dataPokemon, setDataPokemon ] = useState({
        name:"",
        image: "",
        types: [],
        primaryColor: ""

    })

    async function getDataPokemon(){
        const urlPokemon = "https://pokeapi.co/api/v2/pokemon/17/"
        await axios.get(urlPokemon)
            .then((res) => {
                console.log(res.data)
                let tmpImage = res.data.sprites.front_default;
                let tmpTypes = res.data.types.map(obj => {
                    return obj.type.name
                });
                let tmpColor = getColorPokemon(tmpTypes[0]);
                console.log(tmpTypes, tmpColor, res.data.name)

                setDataPokemon({
                    name: res.data.name,
                    image: tmpImage,
                    types: tmpTypes,
                    primaryColor: tmpColor
                })
                
                
            })
    }

    useEffect(() => {
        getDataPokemon();
    }, [handler]);

    return (<>
        <h2>I'm here</h2>
        <button onClick={() => {
            setH(handler+1);
            console.log(dataPokemon)
        }}>click</button>
    </>);
}

export default TmpPokemonCard;