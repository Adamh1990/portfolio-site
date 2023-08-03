import React, { useState } from 'react';
import {AiOutlineBars} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    //Redux, sets the bar menu's default state as 'closed'//
    const navLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },    
    ]
        // built navbar links as an array of objects for easier, more consistent access/layout //
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-rose-500 bg-gray-800 fixed"> 
    {/* size and color of navbar header  */}
        <div>
            <h1 className="text-5xl font-signature ml-2 text-cyan-600">Adam</h1>
        </div>
    {/* size/color/location of my name in the navbar */}
        <ul className="hidden md:flex">
    {/* mobile-friendly list display */}
            {navLinks.map(({ id, link }) => (
                <li
                    key={id}
                    className="px-4 cursor-pointer capitalize font-medium text-lg hover:scale-110 duration-200"
                >
                    {link}
                </li>
    /* this is where the navbar array of links is plugged in using map() to layout everything almost automatically, far less work than doing everything one-by-one */
            ))}
        </ul>
        <div
            onClick={() => setNav(!nav)}
    /* when the bar menu is clicked, it will switch the opposite of its current state. closed -> open, open -> closed */
            className="cursor-pointer pr-4 z-10 text-green-500 md:hidden"
        >
            {nav ? <FaTimes size={30} /> : <AiOutlineBars size={30} />}
    {/* When the bar menu is clicked, and in the opposite of its default(closed) state, the bars will become an 'x', clicked again, it returns to the bars */}
        </div>
        {nav && (
    // switch state when clicked
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-800 to-gray-800 text-gray-400">
            {navLinks.map(({ id, link }) => (
                <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    {link}
                </li>
            ))}
    {/* using the same map() setup as above to display the array of objects in the bar drop-down */}
        </ul>
        )}
    </div>
  );
};

export default NavBar;

