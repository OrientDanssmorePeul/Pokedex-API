import React from "react";

function PokemonGrid(props) {
    const { pokemons } = props;
    return (
        <div className="pokemon-grid">
            {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}

            {
                pokemons.map((p, index)=>(
                    <div key={index} style={{border: "1px black solid", padding: "10px", borderRadius: "5px", backgroundColor: "ghostwhite"}}>
                        <h3>{p.name}</h3>
                        <p>Type: {p.type}</p>
                        <p>Level: {p.level}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default PokemonGrid;
