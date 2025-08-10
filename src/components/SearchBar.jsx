import React, {useState, useEffect} from 'react'
import setsData from "../sets.json"
import Table from '../components/Table'

const SearchBar = () => {
  const [search, setSearch] = useState(""); // [variable de estado, función que actualiza la variable de estado]
  const [filteredSets, setFilteredSets] = useState(setsData); // setsData es el valor inicial de filteredSets

  useEffect(() => {
      const handler = setTimeout(() => { // setTimeout(() => {código para filtrar los sets}, tiempo después de dejar de escribir para ejecutar el código)
        const searchCriteria = search.split(",").map(c => c.trim().toLowerCase()).filter(c => c.length > 0); // si escribo "Gengar, Shadow Ball", los criterios de búsqueda son "gengar" y "shadow ball"
        const filteredItems = setsData.filter((set) => 
          searchCriteria.every(criterion =>
            Object.entries(set).some(([key, value]) => {
              if (key == "EVs") return false
              else if (typeof value === "string") {
                return value.toLowerCase().includes(criterion)
              }
              else if (Array.isArray(value)) {
                return value.some(v => v.toLowerCase().includes(criterion))
              }
              else return false
            })
          )
        )
        setFilteredSets(filteredItems)
      }, 200); // espera 200ms tras dejar de escribir
      return () => clearTimeout(handler); // limpia el timeout si el usuario sigue escribiendo (cleanup function)
    }, [search]); // useEffect(función, array con las variables que se usan en la función)
  // sin useEffect, el código se ejecuta cada vez que se renderiza el componente, lo que puede causar problemas
  // al usar useEffect, el código se ejecuta solo cuando cambian las dependencias

  return (
    <>
      <div id="search-bar">
          <input
              type="text"
              spellCheck="false"
              placeholder="Search by Pokémon, item, move, trainer, etc."
              value={search} // hace el texto introducido en el input sea la variable de estado search
              onChange={(e) => setSearch(e.target.value)}
              // onChange={e => setSearch(e.target.value)}
              // e es el evento que se produce al cambiar el valor del input, e.target es el elemento donde tiene lugar el evento (en este caso, <input>), e.target.value devuelve la propiedad value del input, que es el texto que hay en el input en ese momento
          />
      </div>
      <Table 
        rows={
          (filteredSets.length > 350) ? [] : filteredSets
        }
        columns={Object.keys(setsData[0]).slice(1)} // Object.keys(setsData[0]) devuelve ["#", "Pokémon", "Item", ...]
      />
      {/* {search.trim().length > 1 && filteredSets.length > 0 && (
        <Table rows={filteredSets} columns={Object.keys(setsData[0]).slice(1)} /> 
      )} condición && (lo que ocurre si se verifica la condición) */}
    </>
  )
}

export default SearchBar