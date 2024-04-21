import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

const users=[
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName:'pheralb',
        name:'Pablo Hdez',
        isFollowing: false
    },
    {
        userName: 'elizlux',
        name:'Elizabeth Izquierdo',
        isFollowing: true
    }
]
export function App(){
    return(
    <section className="App">{
        users.map(({userName, name, isFollowing})=>{
            return (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialFollowing = {isFollowing}>
                    {name}
                </TwitterFollowCard>
            )
        })
    }
    </section>) 
}