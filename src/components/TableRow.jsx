import React, {useState} from 'react'
import moveType from "../moveType.json";

const typeColor = {
  Normal: "#A8A77A", // Type: "Color" (por eso lo llamo typeColor; lo mismo se aplica a moveType)
  Fire: "#EE8130",
  Water: "#6390F0",
  Electric: "#F7D02C",
  Grass: "#7AC74C",
  Ice: "#96D9D6",
  Fighting: "#C22E28",
  Poison: "#A33EA1",
  Ground: "#E2BF65",
  Flying: "#A98FF3",
  Psychic: "#F95587",
  Bug: "#A6B91A",
  Rock: "#B6A136",
  Ghost: "#735797",
  Dragon: "#6F35FC",
  Dark: "#705746",
  Steel: "#B7B7CE",
  Unknown: "#68A090"
}

const TableRow = ({row, id}) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <tr key={id}>
      <td style={{borderRight: 'none'}}>
        <img className="static" src={"pokemon_icons/png/" + row["#"] + ".png"}/>
        <img className="active" src={"pokemon_icons/gif/" + row["#"] + ".gif"}/>
      </td>

      <td style={{borderLeft: 'none', textAlign: 'left'}}>
        {row["Pokémon"]}
      </td>

      <td style={{borderRight: 'none'}}>
        <img src={"item_icons/" + row["Item"].toLowerCase().replace(/\s/g, '') + ".png"} />
      </td>

      <td style={{borderLeft: 'none', textAlign: 'left'}}>
        {row["Item"]}
      </td>

      {row["Moves"].map(move => {
        const type = moveType[move]
        const color = typeColor[type]
        return (
          <td>
            <div style={{borderRadius: '10px', backgroundColor: color, color: 'white', paddingTop: '5px', paddingBottom: '5px'}}>
              {move}
            </div>
          </td>
        )
      })}

      <td>
        {row["Nature"]}
      </td>

      {row["EVs"].map(value => {
        return (
          <td>
            {value}
          </td>
        )
      })}

      <td style={{fontSize: '10px', textAlign: 'left', verticalAlign: 'top', paddingLeft: '5px'}}>
        <button onClick={() => setIsVisible(!isVisible)} style={{fontSize: '13px', marginTop: '8.5px', marginBottom: '8.5px',  backgroundColor: 'inherit', border: 'none', fontStyle: 'italic'}}>
          <img style={{
            width: '10px',
            transform: isVisible ? 'rotate(0)' : 'rotate(-90deg)',
            transition: 'transform 0.5s ease'
            }} src={"arrow.png"}/>
          {isVisible ? ' Hide' : ' Show'}
        </button>
        {console.log(row["Trainers"].length)}
        <div style={{
          height: isVisible ? `${12*row["Trainers"].length}px` : '0px',
          opacity: isVisible ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.8s ease',
          backgroundColor: 'inherit'
        }}>
          {isVisible && (row["Trainers"].map(trainer => {
            return (
              <React.Fragment>
                {trainer}
                <br/>
              </React.Fragment>
            )
          }))}
        </div>
      </td>
    </tr>
  )
}

export default TableRow