import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
	return (
		<Link to={`/apartment/${id}`} className="card">
			<img src={cover} alt={title} className="card-image" />
			<h2 className="card-title">{title}</h2>
		</Link>
	);
};

export default Card;
