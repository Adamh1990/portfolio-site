import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=" w-full h-screen bg-gradient-to-b from-gray-950 via gray-950 to-gray-500 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div>
                <p className="justify-center text-4xl font-bold flex border-b-4 border-gray-500">Contact</p>
                <p className="py-6 flex justify-center">Send a message directly to my inbox</p>
            </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/38a0fea9-1902-41b0-a73f-f7ed01b44e75" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" 
                        name="name" 
                        placeholder="Enter your name"
                        className="p2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input type="text" 
                        name="email" 
                        placeholder="Enter your email address" 
                        className="my-4 p2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea 
                        name="message"
                        placeholder="Enter your message" 
                        rows="10" 
                        className="p-2 bg-transparent border-2 rounded-md text-white focus outline-none">
                        </textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration 300">Talk to me</button>
                    </form>
                </div>
        </div>

    </div>
  )
}

export default Contact