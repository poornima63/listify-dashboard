import React from "react";
import ListingCard from './ListingCard'
import { useListContext } from "../contextapi/listcontext/listContext";
import { useAuthContext } from "../contextapi/Authcontext/Authcontext";
function Home() {
  const {allList} = useListContext()
const {user}  =  useAuthContext()
  return (
    <>
      <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            class="absolute left-0 hidden h-full text-white dark:text-gray-800 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              The super
            </p>
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none">
              easy way to {user?.firstName}
              <br class="hidden md:block" />
              your place&nbsp;
              <span class="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p class="pr-5 mb-5 text-base text-gray-700 dark:text-gray-300 md:text-lg">
              {user?.firstName} Setup makes it easier to put your place on Prabhat, with
              hands-on help from a Superhost from your first question to your
              first guest.
            </p>
            <div class="flex items-center">
              <a
                href="/addlisting"
                class="inline-flex bg-gray-800 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                List your Home
              </a>
              <a
                href="/about"
                aria-label=""
                class="inline-flex items-center font-semibold text-gray-800 dark:text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
         {allList?.length > 0 &&
                     allList.slice(0,3).map((element, index) => {
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
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div class="text-center">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="b039bae0-fdd5-4311-b198-8557b064fce0"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                  <span class="relative">It’s</span>
                </span>
                &nbsp;Easy to list your home on {user?.firstName}
              </h2>
              <p class="text-base text-gray-900 dark:text-gray-300 md:text-lg">
                {user?.firstName} guests are interested in all kinds of places – spare
                rooms, flats, houses, holiday homes, even treehouses.
              </p>
            </div>
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required=""
                type="text"
                class="flex-grow w-full h-12 px-4 mb-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                class="inline-flex bg-orange-600 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p class="max-w-md mx-auto mb-10 text-xs text-gray-900 dark:text-gray-100 sm:text-sm md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-gray-900 dark:text-gray-100 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
