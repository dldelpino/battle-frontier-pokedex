import React from 'react'

const Header = () => {
  return (
    <header>
        <div style={{width: "50px", backgroundColor: "inherit"}}>

        </div>
        <div id="title">
            <img src="icon.png"/>
            BATTLE FRONTIER POKÉDEX
        </div>
        <div id="github-icon">
            <a href="https://github.com/dldelpino/battle-frontier-pokedex" target="_blank"><img src="github.png"/></a>
        </div>
    </header>
  )
}

export default Header