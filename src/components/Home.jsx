import React from 'react';
import MyFace from "../assets/AdamProfileWebsite.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-gray-800 via-gray-800 to-blue-800 font-bold">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-cyan-300">
                    Full Stack Developer
                </h2>
                <p className="text-white max-w-md">
                    Currently looking to start a career in front-end or back-end development. Current skills include:</p>
                    <p className="text-rose-500">HTML/CSS, Tailwind CSS, Javascript, Typescript, Express, React, Node, Python, SQLite, MongoDB and more.</p>
                    <p className="text-white">
                    Check out some of my projects
                </p>
                <div>
                    <Link to="projects" 
                    smooth duration={500}
                    className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-800 to-cyan-400 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-180 duration-300">
                            <FaArrowCircleRight size={25} classname="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={MyFace} alt="my face" className="rounded-2xl w-1/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home