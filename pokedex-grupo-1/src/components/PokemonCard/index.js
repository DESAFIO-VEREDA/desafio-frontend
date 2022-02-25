import React from 'react';
import Card from './style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getColorPokemon } from '../../utils/getColorPokemon';

function PokemonCard({ url }) {
    
    const [dataPokemon, setDataPokemon ] = useState({
        name:"",
        image: "",
        types: [],
        primaryColor: ""

    })

    async function getDataPokemon(){
        await axios.get(url)
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
    }, []);

    return (
      <Card background={dataPokemon.primaryColor}>
          <div>
            <h2>{dataPokemon.name}</h2>
            <ul>
                { dataPokemon.types.map((type) => {
                    return <li><p>{type}</p></li>
                })}
            </ul>
          </div>
          
          <img src={dataPokemon.image} alt={ `imagem do pokemon ${dataPokemon.name}` }/>
      </Card>
    )

}

export default PokemonCard;
