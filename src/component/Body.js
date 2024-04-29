import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmmer from "./Shimmer";

const Body = (props) => {
	const [resList, setResList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [allRestaurant, setAllRestaurant] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	//https://corsproxy.io/?
	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		var json = await data.json();
		setAllRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setResList(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return allRestaurant.length === 0 ? (
		<Shimmmer />
	) : (
		<div className="body-container">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button
						onClick={() => {
							let filRes = allRestaurant.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setResList(filRes);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						let filRes = allRestaurant.filter(
							(res) => res.info.avgRatingString >= 4.3
						);
						setResList(filRes);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="res-container">
				{resList.map((restaurant) => {
					return (
						<Link
							key={restaurant.info.id}
							to={"/restaurants/" + restaurant.info.id}
						>
							{" "}
							<RestaurantCard resData={restaurant.info} />{" "}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
