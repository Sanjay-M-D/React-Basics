import { restaurantLists } from "../constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { useEffect, useState } from "react";

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

  // //Not rendering Component ---> Early Returning...
  // if (!allRestaurants.length) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your filter...!</h1>;

  // Conditional Rendering ...
  return allRestaurants?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Filter the data using the local 'restaurants' variable and update the state
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurants-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
