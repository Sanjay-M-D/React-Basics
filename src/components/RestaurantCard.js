import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwo,
  sla, //deliveryTime
}) => {
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[520px] bg-gray-100 break-words rounded-lg hover:bg-gray-300">
      <img className="rounded-lg " src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
