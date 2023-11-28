import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  console.log("render()");

  useEffect(() => {
    // Api Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0694952&lng=77.54761169999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Look's like you're offline!! Please check your Internet Connection!{" "}
      </h1>
    );
  }

  // //Not rendering Component ---> Early Returning...
  // if (!allRestaurants.length) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your filter...!</h1>;

  // Conditional Rendering ...
  return allRestaurants?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search"
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
      </div>

      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
