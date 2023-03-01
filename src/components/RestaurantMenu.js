import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6139391&lng=77.2090212&menuId=" +
        resId
    );
    const json = await response.json();
    console.log(json.data);
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="res-wrapper">
        <div className="res-info">
          <img alt="resImg" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <div className="res-details">
            <div>
              <span>Name: </span>
              {restaurant?.name}
            </div>
            <div>
              <span>Area: </span>
              {restaurant?.area}
            </div>
            <div>
              <span>City: </span>
              {restaurant?.city}
            </div>
            <div>
              <span>Rating: </span>
              {restaurant?.avgRating} stars
            </div>
            <div>
              <span>Price: </span>
              {restaurant?.costForTwoMsg}
            </div>
          </div>
        </div>
      </div>
      <div className="res-item-wrapper">
        <div className="menu-title">Menu</div>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className="item" key={item?.id}>
            <div className="res-item-img">
              <img src={IMG_CDN_URL + item?.cloudinaryImageId} />
            </div>
            <div className="res-item-info">
              <div className="res-name">{item?.name}</div>
              <div className="res-desc">{item?.description}</div>
              <div className="res-price">₹{item?.price / 100}</div>
            </div>
          </div>
        ))}
        {console.log(Object.values(restaurant?.menu?.items))}
      </div>
    </div>
    // </div>
  );
};

export default RestaurantMenu;
