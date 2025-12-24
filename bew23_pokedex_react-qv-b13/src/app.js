import React, { useState, useEffect } from "react";
/* INSTRUCTION: Import the fetchPokemons and fetchTypes functions from the utils/api file */

/* INSTRUCTION: Import the Filters, and PokemonGrid components */

function App() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    /* INSTRUCTION: Create a state for pokemons and types */

    /* 
        INSTRUCTION: 
        - Use the useEffect hook to fetch pokemons. 
    */

    /* INSTRUCTION: Use the useEffect hook to fetch types */

    /* INSTRUCTION: Create functions to handle search change */

    const handleTypeChange = (newType) => {
        /* INSTRUCTION: Update the type state */
    };

    return (
        <div className="app">
            <h1>Pokedex</h1>
            <Filters
                /* INSTRUCTION: 
                    - Pass the search and type states as props to the Filters component
                    - Pass the types data as props to the Filters component
                */

                onTypeChange={handleTypeChange}
                /* 
                    INSTRUCTION:
                    - Pass the handleSearchChange functions as props to the Filters component
                */
            />
            <PokemonGrid
            /* 
                INSTRUCTION:
                    - Pass the pokemons states as props to the PokemonGrid component
                */
            />
        </div>
    );
}

export default App;
