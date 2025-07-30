import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useListContext } from "../contextapi/listcontext/listContext";

function ListDetails() {
  const [post, setPost] = useState({});

  const { allList } = useListContext();
  const { listId } = useParams();

  const findPost = () => {
    allList.forEach((element) => {
      if (element._id === listId) {
        setPost(element);
      }
    });
  };

  useEffect(findPost, [listId]);

  console.log(post);
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center">
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             {post?.title}
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              {post?.description}
            </p>
          </div>
          <p class="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p>
          <div class="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul class="space-y-3">
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                A slice of heaven
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                Disrupt inspire
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                Preliminary thinking
              </li>
            </ul>
            <ul class="space-y-3">
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                Flipboard curmudgeon
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                Storage shed
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg
                    class="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </span>
                Satoshi Nakamoto
              </li>
            </ul>
          </div>
        <div className="mt-6 flex items-start space-x-4">
  {/* Avatar */}
  <img
    src={post?.createdby?.avatar}
    alt="avatar"
    className="w-12 h-12 rounded-full object-cover"
  />

  {/* User Info + Post Details */}
  <div>
    {/* Name, Email, Phone */}
   <h1 className="text-base font-semibold">{post?.createdby?.firstName} <span>{post?.createdby?.lastName}</span></h1>
    <h1 className="text-sm text-gray-600">{post?.createdby?.email}</h1>
    <h1 className="text-sm text-gray-600">{post?.createdby?.phone}</h1>

    {/* Additional Info: Likes, Comments, CreatedAt */}
    <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-4">
      <p>👍 Likes: {post?.like?.length || 0}</p>
      <p>💬 Comments: {post?.comments?.length || 0}</p>
      <p>🕒 Created: {new Date(post?.createdAt).toLocaleDateString()}</p>
      <p>Rating: {post?.rating?.length}</p>
    </div>
  </div>
</div>

        </div>
        <div>
          <img
            class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={post?.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ListDetails;
