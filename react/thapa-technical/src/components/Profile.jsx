import Profilecard  from "./ProfileCard"
import Marquee from "react-fast-marquee";

function Profile(){
  
    return(
        <>
          <Marquee>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
        <p>Hello</p>
            <Profilecard 
            name= "Alice"
            age = {30}
            greeting  = {
                <div>
                    <strong>Hi Alice, have a wondeful days</strong>
                </div>
            }>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </Profilecard>
        </>
    )
}

export default Profile