import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useListContext } from "../contextapi/listcontext/listContext";
import { useAuthContext } from "../contextapi/Authcontext/Authcontext";
import UpdateProfile from "./UpdateProfile";

function ListingCard(props) {
  const {deletePost,likePost} = useListContext();
  const {user} =  useAuthContext();
  const [open,setOpen] = useState(false)
   const [isLike, setIsLike] = useState();
   
   
 
  const handleOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }
  

  const {
    title,
    description,
    image,
    price,
    location,
    country,
    createdAt,
    like,
    comment,
    id,
    hidden
  } = props;

  let totalLike = like?.length;
  if (like?.length >= 1000) {
    totalLike = (totalLike / 1000).toFixed(1) + "K";
  }

  if (like?.length >= 1000000) {
    totalLike = (totalLike / 1000000).toFixed(1) + "M";
  }

  let totalComment = comment?.length;
  if (comment?.length >= 1000) {
    totalComment = (totalComment / 1000).toFixed(1) + "K";
  }
  if (comment?.length >= 1000000) {
    totalComment = (totalComment / 1000000).toFixed(1) + "M";
  }
  useEffect(()=>{
    setIsLike(like.includes(user?._id) ? true : false)
   },[like, user?._id])
   const likePostFun = ()=>{
     likePost(id)
       setIsLike((prev) => !prev);
  }
  return (
    <div class="overflow-hidden bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 relative transition-shadow duration-300 rounded">
      { hidden && <div class="absolute top-0 right-0 bg-white/75 px-3 text-xl py-2 rounded-bl rounded-tr">
        <i class="mx-2 fa-solid fa-pen-to-square cursor-pointer" onClick={handleOpen}></i>
        <i class="mx-2 text-red-600 fa-solid fa-eraser cursor-pointer" onClick={()=>{
          deletePost(id)
        }} ></i>
      </div>}
      <Link to={`/listdetails/${id}`} aria-label="Article">
        <img src={image} class="object-cover w-full h-64 rounded" alt="" />
      </Link>
       <UpdateProfile open={open}  handleClose={handleClose} title={title} description={description} price={price} location={location} country={country} id={id} />
      <div class="py-5 px-5">
        <p class="mb-2 text-xs font-semibold text-gray-500 uppercase">
         {new Date(createdAt).toLocaleString()}
        </p>
        <a
          href="/"
          aria-label="Article"
          class="inline-block mb-3 text-gray-950 dark:text-gray-50 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p class="text-2xl font-bold leading-5">{title}</p>
        </a>
        <p class="mb-1 text-gray-900 dark:text-gray-300">{description}</p>
        <p class="mb-1 font-[700] text-gray-900 dark:text-gray-100">
          Price: <span class="font-[600]">{price}&nbsp;₹</span>
        </p>
        <div class="flex flex-col mb-4 w-full justify-center pr-10">
          <p class="mb-1 font-[700] text-gray-900 dark:text-gray-100">
            Location: <span class="font-[600]">{location}</span>
          </p>
          <p class="font-[700] text-gray-900 dark:text-gray-100">
            Country: <span class="font-[600]">{country}</span>
          </p>
        </div>
        <div class="flex space-x-4">
          <a
            
            aria-label="Likes"
            class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div class="mr-2">
              <svg
              onClick={likePostFun}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className={`w-5 h-5 transition-colors duration-200 
    ${isLike ? "text-red-500" : "text-gray-600"} group-hover:text-deep-purple-accent-700`}
                
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  stroke-miterlimit="10"
                ></polyline>
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <p class="font-semibold">{totalLike}</p>
          </a>
          <a
          
            aria-label="Comments"
            class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div class="mr-2">
              <svg
             
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="23 5 23 18 19 18 19 22 13 18 12 18"
                  fill="none"
                  stroke-miterlimit="10"
                ></polyline>
                <polygon
                  points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></polygon>
              </svg>
            </div>
            <p class="font-semibold">{totalComment}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
