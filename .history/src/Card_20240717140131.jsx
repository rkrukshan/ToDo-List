import profilepic from "./assets/profile-pic.png";

function Card() {
  return (
    <div className="card">
      <img src={profilepic} alt="Profile Picture" height="200" />
      <h2>Rukshan</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        reprehenderit. Impedit reprehenderit ducimus veritatis quae molestias
        quis et delectus, officia ratione magni, nemo accusamus necessitatibus.
      </p>
    </div>
  );
}

export default Card;
