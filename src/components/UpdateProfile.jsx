import { Modal } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useListContext } from "../contextapi/listcontext/listContext";

function UpdateProfile({
  open,
  handleClose,
  title,
  description,
  price,
  location,
  country,
  id,
}) {
  const { updatePostFun } = useListContext();

  const [update, setUpdate] = useState({
    utitle: title,
    udescription: description,
    uprice: price,
    ulocation: location,
    ucountry: country,
  });
  const [image,setImage] = useState(null)

  const handleUpdate = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const updateFun = (e) => {
    e.preventDefault();
    updatePostFun(update,  id, image, handleClose);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex px-6 flex-col items-center pb-16 absolute inset-x-64 inset-y-7 bg-gray-100 overflow-scroll">
        <div className="mx-auto pt-12 max-w-xl text-center">
          <h1 className="text-3xl capitalize font-bold dark:text-gray-800 sm:text-5xl">
            Update Your List
          </h1>
        </div>
        <form
          className="mt-12 w-3/4  max-lg:w-full mb-0 space-y-4 rounded-lg p-4 shadow-sm sm:p-6 lg:p-8"
          onSubmit={updateFun}
        >
          <div>
            <label htmlFor="title" className="">
              Title
            </label>
            <div className="relative">
              <input
                id="title"
                name="utitle"
                value={update.utitle}
                onChange={handleUpdate}
                type="text"
                className="w-full border-2 rounded-lg outline-none border-gray-200 mt-2 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter notes title"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="description" className="">
              Description
            </label>

            <div className="relative">
              <textarea
                id="description"
                name="udescription"
                rows={5}
                cols={100}
                type="text"
                value={update.udescription}
                onChange={handleUpdate}
                className="w-full mt-2 border-2 outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter notes description"
              />
            </div>
          </div>

          <div>
            <label htmlFor="title" className="">
              price
            </label>
            <div className="relative">
              <input
                id="price"
                name="uprice"
                type="number"
                value={update.uprice}
                onChange={handleUpdate}
                className="w-full border-2 rounded-lg outline-none border-gray-200 mt-2 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter notes price"
              />
            </div>
          </div>
          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label htmlFor="files" className="block text-sm font-medium">
              Image
            </label>
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                   onChange={(e) => setImage(e.target.files[0])}
                className="px-3 py-6 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
              />
            </div>
          </fieldset>

          <div className="flex justify-content-center gap-5 items-center">
            <div>
              <label htmlFor="title" className="">
                Location
              </label>
              <div className="relative">
                <input
                  id="location"
                  name="ulocation"
                  type="text"
                  value={update.ulocation}
                  onChange={handleUpdate}
                  className="w-full border-2 rounded-lg outline-none border-gray-200 mt-2 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter notes location"
                />
              </div>
            </div>
            <div>
              <label htmlFor="title" className="">
                Country
              </label>
              <div className="relative">
                <input
                  id="country"
                  name="ucountry"
                  value={update.ucountry}
                  onChange={handleUpdate}
                  type="text"
                  className="w-full border-2 rounded-lg outline-none border-gray-200 mt-2 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter notes country"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-5 justify-between  gap-5">
            <button
              className="block max-sm:w-32 rounded-lg bg-rose-600 px-5 py-3 text-sm font-medium text-white cursor-pointer"
              onClick={handleClose}
            >
              Discard
            </button>
            <button className="block max-sm:w-32 rounded-lg bg-rose-900 px-5 py-3 text-sm font-medium text-white cursor-pointer">
              Update List
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default UpdateProfile;
