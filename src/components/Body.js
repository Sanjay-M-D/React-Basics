import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function filterData(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

const BodyComponent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchInput] = useState("");
  console.log("render()", allRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // Api Call
    getRestaurants();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Look's like you're offline!! Please check your Internet Connection!{" "}
      </h1>
    );
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89037501599536&lng=77.64229110894304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // //Not rendering Component ---> Early Returning...
  // if (!allRestaurants.length) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your filter...!</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering ...
  return allRestaurants?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black p-2"
            placeholder=""
            value={searchText}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="px-4 py-2  bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the data using the local 'restaurants' variable and update the state
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              // filter logic for top rated restaurants...
              const filteredTopRestaurants = allRestaurants.filter(
                (restaurant) => {
                  return restaurant?.info?.avgRating > 4.3;
                }
              );
              console.log(filteredTopRestaurants);
              setFilteredRestaurants(filteredTopRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className=" UserInput m-4 p-4 flex items-center ">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted {...restaurant.info} />
            ) : (
              <RestaurantCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
