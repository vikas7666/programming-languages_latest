export const UserDetails = ({ name, isOnline, hideOffline, isPremimum, isNewUser, role }) => {

    if (hideOffline && !isOnline) {
        return null
    }

    let roleBadge = null;
    if (role === "admin") {
        roleBadge = <span>Admin </span>
    } else if (role === "moderator") {
        roleBadge = <span>Moderator </span>
    } else if (role === "vip") {
        roleBadge = <span>Moderator </span>
    }

    /* if (isOnline) {
        return (
            <div>
                <h3>{name} <span>Online</span></h3>

                <p>Availble for Chat</p>
                <button>Send Message</button>
            </div>
        )
    }
    return (
        <div>
            <div>{name}</div>
            <span>offline</span>
            <p>Not Availble</p>
            <small>Check back later</small>
        </div>
    ) */

    //  using ternary operator 
    return (
        <div>
            <div>{name}</div>
            {/* && Operator  
                 if condition true then only render
            */}
            {isPremimum && <span>star Emoji</span>}
            <br />
            {isNewUser && <span>cake Emoji</span>}
            <br />
            {roleBadge}
            <span>{isOnline ? "online" : "offline"}</span>
            <p>{isOnline ? "Availble for chat" : "Not Availble for chat"}</p>
            {
                isOnline ? (<button>Send Message</button>) : (<small>Check back later</small>)
            }
        </div>
    )



}