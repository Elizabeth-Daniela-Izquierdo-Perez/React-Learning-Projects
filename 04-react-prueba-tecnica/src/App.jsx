import "./App.css"
import { useCatImage } from "./hooks/UseCatImage"
import { useCatFact } from "./hooks/useCatFcat"
import { Otro } from "./services/Components/Otro"

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${words}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'



export function App(){
    const {fact, refreshRandomFact} = useCatFact()
    const {imageURL} = useCatImage({fact})


    const handleClick = async() =>{
        refreshRandomFact()
    }


    return(
        <main>
                <h1>App de gatitos</h1>
                 <button onClick={handleClick}>Get new fact</button>
                 {fact && <p>{fact}</p>}
                 {imageURL && <img src={`${imageURL}`} alt="cat"/>}
            <Otro/>
        </main>
    )
}