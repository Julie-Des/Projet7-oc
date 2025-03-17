import starRed from "../assets/star-red.png";
import starGrey from "../assets/star-grey.png";

function Rating({ rating }) {
	const maxStars = 5;
	const redStars = parseInt(rating);

	return (
		<div className="rating">
			{[...Array(maxStars)].map((_, index) => (
				<img key={index} src={index < redStars ? starRed : starGrey} alt="Étoile" className="star" />
			))}
		</div>
	);
}

export default Rating;
