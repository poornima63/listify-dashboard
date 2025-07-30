import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { baseUrls } from "../baseUrls";
import { useListContext } from "../contextapi/listcontext/listContext";


function Listing() {
  const { allList, getAllList } = useListContext()
  useEffect(() => {
    getAllList();

  }, []);

  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allList?.length > 0 &&
          allList?.map((element, index) => {
            return (
              <ListingCard
                key={index}
                title={element?.title}
                description={element?.description}
                image={element?.image}
                price={element?.price}
                location={element?.location}
                country={element?.country}
                createdAt={element?.createdAt}
                like={element?.like}
                comment={element?.comment}
                id={element?._id}
                hidden={false}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Listing;
