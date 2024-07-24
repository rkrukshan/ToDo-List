import profilepic from "./assets/profile-pic.png";

function Card() {
  return (
    <div className="card">
      <img src={profilepic} alt="Profile Picture" height="200" width="200" />
      <h2>Rukshan</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos?
      </p>
    </div>
  );
}

export default Card;
