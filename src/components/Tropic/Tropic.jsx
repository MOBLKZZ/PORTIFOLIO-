import "./Tropic.scss";

function Tropic({ name, icon }) {
  return (
    <div className="Tropic">
			<div className="container-img">
      	<img src={icon} />
			</div>
			
      <h1>{name}</h1>
    </div>
  );
}

export default Tropic;
