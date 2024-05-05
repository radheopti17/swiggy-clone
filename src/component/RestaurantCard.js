import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRatingString, costForTwo, sla } = resData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 flex flex-col h-full rounded-lg hover:bg-gray-400">
      <img
        className="res-logo rounded-lg aspect-square"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      ></img>
      <div className="flex flex-col m-0">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User - {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
