import React from 'react';
import Card from './style';

function PokemonCard(props) {
    return (
      <Card backGroundColor="../../assets/Poké_color_cinza.png">
          <div>
            <h2>{props.pokemon.name}</h2>
            <ul>
                { props.pokemon.types.map((type) => {
                    return <li><p>{type.name}</p></li>
                })}
            </ul>
          </div>
          
          <img src={props.pokemon.sprites.front_default} alt={ `imagem do pokemon ${props.pokemon.name}` }/>
      </Card>
    )

}

export default PokemonCard;
