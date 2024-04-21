import {useState, useEffect} from 'react'


export function useCatImage ({fact}){//custom hook
    const [imageURL, setImageURL] = useState()//estado de la imagen

    useEffect(()=>{//sacar la primera palabra del fact para buscar lla foto
        if(!fact) return 

        const words = fact.split(' ')[0]

        setImageURL(`https://cataas.com/cat/says/${words}?fontSize=50&fontColor=red`)
    },[fact])//cada vez q fact cambia su estado, se ejecuta el useEfect este 
    return {imageURL}
}//{imageURL}