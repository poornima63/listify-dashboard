import React, { useEffect } from 'react';
import { useListContext } from '../contextapi/listcontext/listContext';
import ListingCard from './ListingCard'; // ensure you import this correctly
import { FolderPlus } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
function Yourpost() {
  const { allList, yourPost } = useListContext();
const navigate = useNavigate()
  useEffect(() => {
    yourPost();
  }, []);
  const handleAddList = ()=>{
    navigate('/addlisting')
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {allList?.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {allList.map((element, index) => (
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
              hidden={true}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96 ">
      {/* Icon */}
      <FolderPlus className="w-10 h-10 text-gray-400 mb-4" />

      {/* Text */}
      <h2 className="text-lg font-semibold text-gray-900">No lists found</h2>
      <p className="text-sm text-gray-500 mb-6">
        Get started by adding a new list.
      </p>

      {/* Button */}
      <button
        onClick={handleAddList}
        className="bg-[#1E3A8A] hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        + New List
      </button>
    </div>
      )}
    </div>
  );
}

export default Yourpost;
