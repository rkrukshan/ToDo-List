import profilepic from './assets/profile-pic.png'

function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="Profile Picture" />
        </div>
    )
}

export default Card