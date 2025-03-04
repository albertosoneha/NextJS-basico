'use client'

import { useState } from "react"

export  function Button() {
    const [nome, setNome] = useState("Roberto")

    function handleChangeName() {
        setNome("Alberto")
    }


 return (
   <div>
     <button onClick={handleChangeName}>Alterar nome</button><br />
     <h3>Nome:{nome}</h3>
   </div>
  )
}