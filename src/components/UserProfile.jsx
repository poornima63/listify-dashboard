import React, { useState } from "react";
import { useAuthContext } from "../contextapi/Authcontext/Authcontext";

const UserProfileCard = () => {

  const {user,changeProfilePic} = useAuthContext()
  const [profileImage,setProfileImage] = useState(null)


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      changeProfilePic(file); // directly upload on select
    }
  };
  return (
    <div className="max-w-4xl mx-auto mt-50 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6">
      
      {/* Left: User Info */}
      <div className="flex-1 text-left space-y-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {`${user?.firstName} ${user?.lastName}`}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Email:</strong> {user?.email}
        </p>
        {/* <p className="text-gray-700 dark:text-gray-300">
          <strong>Username:</strong> {user?.username}
        </p> */}
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Country</strong> {user?.country}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Location</strong> {user?.location}
        </p>
      </div>

      {/* Right: Profile Image */}
       <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="Profile"
          className="object-cover w-full h-full"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="profilePicInput"
        />

        <label
          htmlFor="profilePicInput"
          className="absolute bottom-2 right-2 bg-black bg-opacity-60 p-2 rounded-full cursor-pointer hover:bg-opacity-80"
          title="Change profile picture"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16M4 6l4 16m-4-16v16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default UserProfileCard;
