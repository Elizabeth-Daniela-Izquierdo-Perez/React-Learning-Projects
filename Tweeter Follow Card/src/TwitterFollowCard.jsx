import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-buttonIsFollowing' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                alt="El avatar de midudev"
                className="tw-followCard-avatar"
                src = {`https://unavatar.io/${userName}`}/>
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-name">{children}</strong>
                    <span className="tw-followCard-userName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button> 
            </aside>
        </article>
    )
}