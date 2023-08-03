import React from 'react';
import MyFace from "../assets/AdamProfileLinkedIn.jpg"
import { FaArrowCircleRight } from "react-icons/fa"

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-blue-500 to-gray-800 font-bold">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-7xl font-bold text-black">
                    I'm a Full Stack Developer
                </h2>
                <p>
                    Filler paragraph, talk about experience, what I'm looking for, strongest technologies and stuff
                </p>
                <div>
                    <button>
                        Projects
                        <span>
                            <FaArrowCircleRight />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={MyFace} alt="my face" className="rounded-2xl h-96 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home