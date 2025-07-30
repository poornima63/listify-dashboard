## Navbar

<div className="bg-gray-900 dark:bg-gray-950 fixed top-0 left-0 z-50 w-full">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                        <svg className="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2"
                            stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="white">
                            <rect x="3" y="1" width="7" height="12"></rect>
                            <rect x="3" y="17" width="7" height="6"></rect>
                            <rect x="14" y="1" width="7" height="6"></rect>
                            <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Prabhat</span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li><NavLink to="/" aria-label="Our product" title="Our product"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>Home</NavLink>
                        </li>
                        <li><NavLink to="/listing" aria-label="Our product" title="Our product"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>Explore Stays</NavLink>
                        </li>
                        <li><NavLink to="/addlisting" aria-label="Product pricing" title="Product pricing"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>Add Listing</NavLink>
                        </li>
                        <li><NavLink to="/about" aria-label="About us" title="About us"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>About</NavLink></li>
                        <li><NavLink to="/contact" aria-label="About us" title="About us"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>Contact</NavLink></li>
                    </ul>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li className='text-white text-xl' onClick={toggleTheme}>
                            {theme == 'dark' ? <i className="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
                        </li>
                        <li className='text-white text-xl'>
                            <i className="fa-solid fa-bell"></i>
                        </li>
                        <li>
                            {localStorage.getItem('token') ? <Link
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up" title="Sign up" onClick={() => logoutFun(navigate)}>
                                Logout
                            </Link> : <Link to="/login"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up" title="Sign up">
                                Login
                            </Link>}
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button aria-label="Open Menu" title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                                <path fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                                <path fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>



## HomePage

<div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg class="absolute left-0 hidden h-full text-white dark:text-gray-800 transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
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
              easy way to prabhat<br class="hidden md:block" />
              your place&nbsp;<span class="inline-block text-deep-purple-accent-400">is real</span>
            </h2>
            <p class="pr-5 mb-5 text-base text-gray-700 dark:text-gray-300 md:text-lg">
              Prabhat Setup makes it easier to put your place on Prabhat, with hands-on help from a Superhost from your first question to your first guest.
            </p>
            <div class="flex items-center">
              <a
                href="/addlisting"
                class="inline-flex bg-gray-800 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                List your Home
              </a>
              <a href="/about" aria-label="" class="inline-flex items-center font-semibold text-gray-800 dark:text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-700">Learn more</a>
            </div>
          </div>
        </div>
      </div>
       <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
              <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
               {/*listingcard*/}
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
                  <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                      <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24"></rect>
                  </svg>
                  <span class="relative">It’s</span>
                </span>
                &nbsp;Easy to list your home on Prabhat
              </h2>
              <p class="text-base text-gray-900 dark:text-gray-300 md:text-lg">
                Prabhat guests are interested in all kinds of places – spare rooms, flats, houses, holiday homes, even treehouses.
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-gray-900 dark:text-gray-100 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>





## FooterPage

<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                        <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                            <rect x="3" y="1" width="7" height="12"></rect>
                            <rect x="3" y="17" width="7" height="6"></rect>
                            <rect x="14" y="1" width="7" height="6"></rect>
                            <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100 uppercase">Prabhat</span>
                    </a>
                    <div class="mt-6 lg:max-w-sm">
                        <p class="text-sm text-gray-900 dark:text-gray-100">
                            Find Your Perfect Stay. Host Easily. Travel Freely. 
                        </p>
                        <p class="mt-4 text-sm text-gray-900 dark:text-gray-100">
                            Prabhat is a modern platform that connects travelers with hosts offering unique stays across the country. Whether you're looking for a cozy room, an entire home, or a peaceful retreat, Prabhat helps you find the perfect place to stay.
                        </p>
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-gray-900 dark:text-gray-50">Contacts</p>
                    <div class="flex">
                        <p class="mr-1 text-gray-900 dark:text-gray-100">Phone:</p>
                        <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" class="text-deep-purple-accent-400 hover:text-deep-purple-800">850-123-5021</a>
                    </div>
                    <div class="flex">
                        <p class="mr-1 text-gray-900 dark:text-gray-100">Email:</p>
                        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" class="text-deep-purple-accent-400 hover:text-deep-purple-800">info@lorem.mail</a>
                    </div>
                    <div class="flex">
                        <p class="mr-1 text-gray-900 dark:text-gray-100">Address:</p>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="text-deep-purple-accent-400 hover:text-deep-purple-800">
                            312 Lovely Street, NY
                        </a>
                    </div>
                </div>
                <div>
                    <span class="text-base font-bold tracking-wide text-gray-900 dark:text-gray-50">Social</span>
                    <div class="flex items-center mt-1 space-x-3">
                        <a href="/" class="text-gray-500 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                                <path
                                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                ></path>
                            </svg>
                        </a>
                        <a href="/" class="text-gray-500 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                                <circle cx="15" cy="15" r="4"></circle>
                                <path
                                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                ></path>
                            </svg>
                        </a>
                        <a href="/" class="text-gray-500 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                                <path
                                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <p class="mt-4 text-sm text-gray-700 dark:text-gray-300">
                        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
                    </p>
                </div>
            </div>
            <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-500">
                    © Copyright 2020 Lorem Inc. All rights reserved.
                </p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/" class="text-sm text-gray-500 hover:text-deep-purple-accent-400">F.A.Q</a>
                    </li>
                    <li>
                        <a href="/" class="text-sm text-gray-500 hover:text-deep-purple-accent-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" class="text-sm text-gray-500 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>




## LoginPage

 <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-10">
            <div className="lg:grid lg:grid-cols-12 pt-10">
                <section className="relative flex h-24 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="signupbg.jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link to="/" aria-label="Company" title="Company" class="inline-flex items-center">
                            <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2"
                                stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="white">
                                <rect x="3" y="1" width="7" height="12"></rect>
                                <rect x="3" y="17" width="7" height="6"></rect>
                                <rect x="14" y="1" width="7" height="6"></rect>
                                <rect x="14" y="11" width="7" height="12"></rect>
                            </svg>
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Prabhat</span>
                        </Link>
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to Prabhat 🦑
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">
                            Create your account and join Prabhat!
                            Whether you're a traveler or a host, signing up gives you access to book unique stays or list your property. Just enter your details, verify your email, and you're all set to explore or host.
                        </p>
                    </div>
                </section>
                <main
                    className="flex items-center justify-center  sm:px-12 lg:col-span-7 xl:col-span-6"
                >
                    <div className="w-full">
                        <div className="relative -mt-10 ml-5 min-lg:ml-0 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-orange-600 sm:size-20"
                                href="#"
                            >
                                <span className="sr-only">Home</span>
                                <svg
                                    className="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h1>
                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        <div className="rounded-md dark:text-gray-800">
                            <h2 className="mb-3 text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">Login to your account</h2>
                            <p className="text-sm text-center pb-3 text-gray-500">Don't have account?
                                <Link to="/signup" rel="noopener noreferrer" className="focus:underline font-bold hover:underline text-gray-900 dark:text-gray-100">&nbsp;Sign up here</Link>
                            </p>
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm text-gray-900 dark:text-gray-100">Email address</label>
                                        <input type="email"
                                            value={auth.email}
                                            onChange={handleChange}
                                            name="email" id="email" placeholder="Your Email" className="w-full px-3 outline-none focus:outline py-2 text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-800" required />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="password" className="text-sm text-gray-900 dark:text-gray-100">Password</label>
                                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-700 dark:text-gray-400">Forgot password?</a>
                                        </div>
                                        <input type="password" name="password" id="password" placeholder="Your Password"
                                            value={auth.password}
                                            onChange={handleChange} className="w-full px-3 outline-none focus:outline py-2 text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-800" required />
                                    </div>
                                </div>
                                <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-500 hover:bg-orange-600 cursor-pointer dark:text-gray-50">Sign in</button>
                            </form>
                            <div className="flex items-center w-full my-4">
                                <hr className="w-full dark:text-gray-600" />
                                <p className="px-3 dark:text-gray-600">OR</p>
                                <hr className="w-full dark:text-gray-600" />
                            </div>
                            <div className="my-6 space-y-4">
                                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 cursor-pointer focus:dark:ring-orange-500 hover:bg-gray-500" fdprocessedid="8ii0su">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-orange-500">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p className='text-gray-900 dark:text-gray-100'>Login with Google</p>
                                </button>
                                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 cursor-pointer hover:bg-gray-500 focus:dark:ring-orange-500" fdprocessedid="agnfvp">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-orange-500">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                    <p className='text-gray-900 dark:text-gray-100'>Login with GitHub</p>
                                </button>
                                <button aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 cursor-pointer hover:bg-gray-500 focus:dark:ring-orange-500" fdprocessedid="odfb3f">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-orange-500">
                                        <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                    </svg>
                                    <p className='text-gray-900 dark:text-gray-100'>Login with Twitter</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>





## SignupPage

<section className="bg-gray-100 dark:bg-gray-900  text-gray-900 dark:text-gray-100 px-10 p-6">
            <div className="lg:grid lg:grid-cols-12 pt-10">
                <section className="relative flex h-24 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="signupbg.jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link to="/" aria-label="Company" title="Company" class="inline-flex items-center">
                            <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2"
                                stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="white">
                                <rect x="3" y="1" width="7" height="12"></rect>
                                <rect x="3" y="17" width="7" height="6"></rect>
                                <rect x="14" y="1" width="7" height="6"></rect>
                                <rect x="14" y="11" width="7" height="12"></rect>
                            </svg>
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Prabhat</span>
                        </Link>
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to Prabhat 🦑
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">
                            Create your account and join Prabhat!
                            Whether you're a traveler or a host, signing up gives you access to book unique stays or list your property. Just enter your details, verify your email, and you're all set to explore or host.
                        </p>
                    </div>
                </section>
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-orange-600 sm:size-20"
                                href="#"
                            >
                                <span className="sr-only">Home</span>
                                <svg
                                    className="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h1>
                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={submitHandler}>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="FirstName"
                                    name="fname"
                                    placeholder='First Name'
                                    value={user.fname}
                                    onChange={changeHandler}
                                    className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="LastName"
                                    name="lname"
                                    placeholder='Last Name'
                                    value={user.lname}
                                    onChange={changeHandler}
                                    className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="email" className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"> Email </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={changeHandler}
                                    placeholder='Your Email'
                                    className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"> Password </label>
                                <input
                                    type="password"
                                    id="Password"
                                    value={user.password}
                                    name="password"
                                    onChange={changeHandler}
                                    placeholder='Password'
                                    className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Password Confirmation
                                </label>
                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="con_password"
                                    value={user.con_password}
                                    onChange={changeHandler}
                                    placeholder='Confirm Password'
                                    className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        onChange={(e) => setTerm_condition(e.target.checked)}
                                        required
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-100">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-gray-900 dark:text-gray-100 underline"> terms and conditions </a>
                                        and
                                        <a href="#" className="text-gray-900 dark:text-gray-100 underline">privacy policy</a>.
                                    </span>
                                </label>
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                {term_condition && user.password === user.con_password && user.password.length && user.con_password.length ? <button
                                    className="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500" >
                                    Create an account
                                </button> : <button
                                    className="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 disabled:pointer-events-none disabled:opacity-50" disabled>
                                    Create an account
                                </button>}
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to="/login" className="text-gray-900 dark:text-gray-100 underline font-semibold text-orange-500">&nbsp;Log in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>


## AboutPage

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Brand new
                    </p>
                </div>
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
                    <span class="relative inline-block">
                        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                            <defs>
                                <pattern id="27df4f81-c854-45de-942a-fe90f7a300f9" x="0" y="0" width=".135" height=".30">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)" width="52" height="24"></rect>
                        </svg>
                        <span class="relative">Find&nbsp;</span>
                    </span>
                   Your Perfect Stay. Host Easily. Travel Freely.
                </h2>
                <p class="text-base text-gray-700 dark:text-gray-500 md:text-lg">
                   Prabhat is a modern platform that connects travelers with hosts offering unique stays across the country. Whether you're looking for a cozy room, an entire home, or a peaceful retreat, Prabhat helps you find the perfect place to stay.
                </p>
            </div>
            <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-3 text-xl font-bold leading-5"> What is Prabhat?</h6>
                        <p class="mb-3 text-sm text-gray-900 dark:text-gray-100">
                            Prabhat is a platform that helps people find and book places to stay — from private rooms to entire homes. It connects hosts who want to rent out their space with travelers looking for affordable and unique stays.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                </div>
                <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-3 text-xl font-bold leading-5">How does it work?</h6>
                        <p class="mb-3 text-sm text-gray-900 dark:text-gray-100">
                            Guests can search for listings by location, date, and price. Once they find a suitable place, they can book it directly through the platform. Hosts can create listings, upload images, set availability, and manage bookings from their dashboard.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                </div>
                <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-3 text-xl font-bold leading-5">Who can become a host?</h6>
                        <p class="mb-3 text-sm text-gray-900 dark:text-gray-100">
                            Anyone with a clean, safe, and comfortable space can become a host. Whether it’s a spare bedroom, a guesthouse, or a vacation home — Prabhat makes it easy to list and earn.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                </div>
                <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div class="mr-4">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-3 text-xl font-bold leading-5"> Is booking safe and secure?</h6>
                        <p class="mb-3 text-sm text-gray-900 dark:text-gray-100">
                            Yes! Prabhat uses secure payment gateways and encrypted data protection. We also support verified user profiles, reviews, and real-time messaging to ensure trust between guests and hosts.
                        </p>
                        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                </div>
            </div>
        </div>





## ContactPage

  <div className="relative flex items-top justify-center min-h-[500px] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:items-center sm:pt-0">
            <div className="w-5/6 py-16 sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-orange-600 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100  mt-2">
                                Fill in the form to start a conversation
                            </p>
                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide text-gray-900 dark:text-gray-100 font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>
                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold text-gray-900 dark:text-gray-100 w-40">
                                    +91 6388774338
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide text-gray-900 dark:text-gray-100 font-semibold w-40">
                                    sanjay892000@gmail.com
                                </div>
                            </div>
                        </div>
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="subject" className="hidden">
                                   Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Your Subject"
                                    className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                   Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="md:w-32 bg-orange-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-5 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>






## ListingPage

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
{/* Listing card*/}
            </div>
        </div>





## ListingCard

<div class="overflow-hidden bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 relative transition-shadow duration-300 rounded">
                        <div class="absolute top-0 right-0 bg-white/75 px-3 text-xl py-2 rounded-bl rounded-tr">
                            <i class="mx-2 fa-solid fa-pen-to-square"></i>
                            <i class="mx-2 text-red-600 fa-solid fa-eraser"></i>
                        </div>
                        <a href="listing/<%=list._id%>" aria-label="Article">
                            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                class="object-cover w-full h-64 rounded" alt="" />
                            </a>
                        <div class="py-5 px-5">
                            <p class="mb-2 text-xs font-semibold text-gray-500 uppercase">
                             Thu Feb 27 2025
                            </p>
                            <a href="/" aria-label="Article"
                                class="inline-block mb-3 text-gray-950 dark:text-gray-50 transition-colors duration-200 hover:text-deep-purple-accent-700">
                                <p class="text-2xl font-bold leading-5">
                                   listing title
                                </p>
                            </a>
                            <p class="mb-1 text-gray-900 dark:text-gray-300">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ut odio sit? Fugit corporis eius, vitae cupiditate quasi ex nemo!
                            </p>
                            <p class="mb-1 font-[700] text-gray-900 dark:text-gray-100">
                                Price: <span class="font-[600]">
                                   2099&nbsp;₹
                                </span>
                            </p>
                            <div class="flex flex-col mb-4 w-full justify-center pr-10">
                                <p class="mb-1 font-[700] text-gray-900 dark:text-gray-100">
                                    Location: <span class="font-[600]">
                                        Lucknow
                                    </span>
                                </p>
                                <p class="font-[700] text-gray-900 dark:text-gray-100">
                                    Country: <span class="font-[600]">
                                       India
                                    </span>
                                </p>
                            </div>
                            <div class="flex space-x-4">
                                <a href="/" aria-label="Likes"
                                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div class="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="6 23 1 23 1 12 6 12" fill="none" stroke-miterlimit="10">
                                            </polyline>
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none" stroke="currentColor" stroke-miterlimit="10"></path>
                                        </svg>
                                    </div>
                                    <p class="font-semibold">7.4K</p>
                                </a>
                                <a href="/" aria-label="Comments"
                                    class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div class="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" stroke="currentColor"
                                            class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none"
                                                stroke-miterlimit="10"></polyline>
                                            <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none"
                                                stroke="currentColor" stroke-miterlimit="10"></polygon>
                                        </svg>
                                    </div>
                                    <p class="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>




## Listing Details Page

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center">
          <div class="max-w-xl mb-6">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore alias quis!
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sequi excepturi est reprehenderit dolores debitis, officiis nesciunt cum inventore aspernatur delectus quis, cumque ea consectetur maiores quisquam quas beatae quod labore. Error nam molestias placeat dolores quasi at obcaecati maxime atque repellat ea odio, tempora vitae libero temporibus blanditiis laborum incidunt ut eos. Tempora itaque rem sequi, numquam sapiente iste reprehenderit quod repellat eum, quae amet nulla ab velit id, illum at in deleniti! Dolor quidem veritatis eum. Ipsum, quia.
            </p>
          </div>
          <p class="mb-4 text-sm font-bold tracking-widest uppercase">Features</p>
          <div class="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul class="space-y-3">
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                A slice of heaven
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Disrupt inspire
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Preliminary thinking
              </li>
            </ul>
            <ul class="space-y-3">
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Flipboard curmudgeon
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Storage shed
              </li>
              <li class="flex">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Satoshi Nakamoto
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
      </div>
    </div>




## AddListingPage

<section className="bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out text-gray-900 dark:text-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h1 className="font-bold py-2 text-2xl ">Listing Your Place </h1>
                        <p className="max-w-xl text-lg">
                            Share your space and start earning today! List your room, apartment, or home in just a few easy steps. Add photos, set your price, and describe your place — we’ll help you reach thousands of travelers looking for stays like yours.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-orange-600"> Start hosting with Prabhat today! </a>
                            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                        </div>
                    </div>
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="/listing/newlisting" method="POST" className="space-y-4">
                            <div>
                                <label className="sr-only" for="title">Title</label>
                                <input className="w-full border rounded-lg border-gray-200 p-3 text-sm" placeholder="Title"
                                    name="listing[title]" type="text" id="title" />
                            </div>
                            <div>
                                <label className="sr-only" for="description">Description</label>
                                <textarea className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Description" name="listing[description]" rows="4" id="description"></textarea>
                            </div>
                            <div>
                                <label className="sr-only" for="image">Image</label>
                                <input className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                     name="listing[image]" type="file" id="image" />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" for="price">Price</label>
                                    <input className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price" type="number" name="listing[price]" id="price" />
                                </div>
                                <div>
                                    <label className="sr-only" for="country">Country</label>
                                    <input className="w-full border rounded-lg border-gray-200 p-3 text-sm" name="listing[country]"
                                        placeholder="Country" type="tel" id="country" />
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" for="Location">Location</label>
                                <input className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Location" name="listing[location]" type="text" id="Location" />
                            </div>
                            <div className="mt-5">
                                <button type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Add Listing
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
