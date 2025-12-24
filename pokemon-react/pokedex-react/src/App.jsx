import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import PokemonGrid from "./components/PokemonGrid";
import { use } from "react";

/* INSTRUCTION: Import the fetchPokemons and fetchTypes functions from the utils/api file */

function App() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    /* INSTRUCTION: Create a state for pokemons and types */
    const [pokemon, setPokemon] = useState([])
    const [types, setTypes] = useState([])

    /* 
        INSTRUCTION: 
        - Use the useEffect hook to fetch pokemons. 
    */

   useEffect(()=>{
    const fetchPokemons = async () => {

      const response1 = await fetch('http://localhost:3000/pokemons')
      const data1 = await response1.json()
      setPokemon(data1)

      const response2 = await fetch('http://localhost:3000/types')
      const data2 = await response2.json()
      setTypes(data2)
    } 
    fetchPokemons()
   },[])


    /* INSTRUCTION: Use the useEffect hook to fetch types */

    /* INSTRUCTION: Create functions to handle search change */

    const handleTypeChange = async (newType) => {
      if(newType.target.value != "All Types"){
        const response = await fetch(`http://localhost:3000/pokemons?type=${newType.target.value}`)
        const data = await response.json()
        setPokemon(data)
      }else{
        const response1 = await fetch('http://localhost:3000/pokemons')
        const data1 = await response1.json()
        setPokemon(data1)
      }
    }
    const handleSearchChange = async (newSearch) => {
      if(newSearch.target.value){
        const response = await fetch(`http://localhost:3000/pokemons?search=${newSearch.target.value}`)
        const data = await response.json()
        setPokemon(data)
      }else{
        const response1 = await fetch('http://localhost:3000/pokemons')
        const data1 = await response1.json()
        setPokemon(data1)
      }
    }

    return (
        <div className="app">
            <h1>Pokedex</h1>
            <Filters types = {types}

                    // - Pass the search and type states as props to the Filters component
                    // - Pass the types data as props to the Filters component

                onSearchChange={handleSearchChange}
                onTypeChange={handleTypeChange}

                    // INSTRUCTION:
                    // - Pass the handleSearchChange functions as props to the Filters component

            />
            <PokemonGrid pokemons={pokemon}/>
        </div>
    );
}

export default App;

