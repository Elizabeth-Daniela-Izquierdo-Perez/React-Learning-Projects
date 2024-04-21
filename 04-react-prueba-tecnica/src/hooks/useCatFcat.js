import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact (){
    const [fact, setFact] = useState()//estado del hecho del gato

    const refreshRandomFact = () =>{//actualiza el dato
        getRandomFact().then(newFact => setFact(newFact))//acualiza el estado con el dato nuevo
    }

    useEffect(refreshRandomFact,[])//nos da un nuevo fact para cuando se monta el componente

    return {fact, refreshRandomFact}
}