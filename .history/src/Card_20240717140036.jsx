import profilepic from './assets/profile-pic.png'

function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="Profile Picture" />
            <h2>Rukshan</h2>
            <p>lorem</p>
        </div>
    )
}

export default Card