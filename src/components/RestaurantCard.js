import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString }) => {
  return (
    <div className=" text-zinc-900 w-fit">
      <img
        className=" w-full h-full object-contain"
        alt="foodimg"
        src={
          IMG_CDN_URL + cloudinaryImageId} />
      <div className=" text-sm font-medium break-words mt-3">{name}</div>
      <div className=" text-xs mt-1">{cuisines?.join(", ")}</div>
      <div className=" flex justify-between text-xs items-center mt-3 py-1 h-5">
        <div className="flex">
          <span>⭑</span>
          <span>{avgRating}</span>
        </div>
        <div>·</div>
        <div>{deliveryTime}MINS</div>
        <div>·</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;