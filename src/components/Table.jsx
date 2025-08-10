import React from 'react'
import TableRow from './TableRow'

const Table = ({rows, columns}) => {
  return (
    <>
        <table>
            <col width="32"/><col width="100"/><col width="32"/><col width="120"/><col width="120"/><col width="120"/><col width="120"/><col width="120"/><col width="80"/><col width="40"/><col width="40"/><col width="40"/><col width="40"/><col width="40"/><col width="40"/><col width="180"/> {/* establecer manualmente la anchura de todas las columnas */ }
            <thead style={{border: '1px solid gray'}}>
                <tr>
                {columns.map(key => {
                    if (key == "Pokémon") {
                        return <th key={key} rowSpan={2} colSpan={2}>{key}</th>
                    }
                    if (key == "Item") {
                        return <th key={key} rowSpan={2} colSpan={2}>{key}</th>
                    }
                    if (key == "Moves") {
                        return <th key={key} rowSpan={2} colSpan={4}>{key}</th>
                    }
                    if (key == "EVs") {
                        return <th key={key} colSpan={6}>{key}</th>
                    }
                    return <th key={key} rowSpan={2}>{key}</th> // React necesita una key única para cada th; si no, devuelve un aviso en la consola
                })}
                </tr>
                <tr>
                    <th style={{fontSize: '10px'}}>HP</th>
                    <th style={{fontSize: '10px'}}>Atk</th>
                    <th style={{fontSize: '10px'}}>Def</th>
                    <th style={{fontSize: '10px'}}>SpA</th>
                    <th style={{fontSize: '10px'}}>SpD</th>
                    <th style={{fontSize: '10px'}}>Spe</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, id) => (
                    <TableRow row={row} id={id} /> // id es el índice de cada set dentro del array
                ))}
            </tbody>
        </table>
        <div style={{margin: "50px"}}> {/* añadir algo de espacio al final de la tabla */}</div>
    </>
  )
}

export default Table