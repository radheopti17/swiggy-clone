import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmmer from "./Shimmer";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const [resInfo, setResInfo] = useState(null);
	useEffect(() => {
		fetchMenu();
	}, []);
	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId);
		const json = await data.json();
		setResInfo(json.data);
	};
	if (resInfo === null) return <Shimmmer />;
	const { name, costForTwoMessage, cuisines, avgRating } =
		resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	return (
		<div className="menu">
			<h1>{name}</h1>
			<h3>{costForTwoMessage}</h3>
			<h3>{cuisines.join(", ")}</h3>
			<h4>{avgRating}</h4>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - Rs.{item.card.info.price / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
