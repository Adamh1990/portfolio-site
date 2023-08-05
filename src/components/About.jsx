import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className="w-full bg-gradient-to-b bg-gray-900 text-white"
    >
        <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full"
        >
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-3 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                Hi there, I'm Adam, a Software Engineer based in northwest Missouri. My technical education is credited to Bloom Institute of Technology, where I learned to build full stack applications from scratch to deployment. I was also fortunate enough to work with several different teams in building full applications from the ground up for stakeholders, I was able to make useful contributions and experience what it's like to work on in different scenarios with others and it's easily my favorite way to work so far.
            </p>
            <br />
            <p className="text-xl">
                Since completing Bloomtech's curriculum, I've had the chance to develop a few of my own humble apps to demonstrate my skills from design, frontend, backend to deployment. I strive to work for a company that I not only believe in, adore and can grow with, but also has a great team of people who love to always be learning and get things done while having fun. Take a look at some of my work, please reach out with any questions/comments, thanks for stopping by!
            </p>
        </div>
    </div>
  )
}

export default About