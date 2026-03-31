import { useState } from "react"

export const UserDashboard = ({ isPremimum }) => {

    const [credits, setCredits] = useState(100)

    if (!isPremimum) {
        return <div>Upgrade to premium to see credits</div>
    }
    return <div>
        <p>you have  {credits} credits</p>
        <button onClick={() => setCredits(0)}></button>
    </div>
}