import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { name, cuisines, avgRatingString, costForTwo, sla } = resData;
	return (
		<div className="res-card">
			<img
				className="res-logo"
				alt="res-logo"
				src={CDN_URL + resData.cloudinaryImageId}
			></img>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRatingString}</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.slaString}</h4>
		</div>
	);
};

export default RestaurantCard;
