import React from 'react';
import antdesign from "../assets/experience-logos/antdesign.png";
import bootstrap from "../assets/experience-logos/bootstrap.png";
import css from "../assets/experience-logos/css.png";
import cypress from "../assets/experience-logos/cypress.png";
import docker from "../assets/experience-logos/docker.png";
import elasticsearch from "../assets/experience-logos/elasticsearch.png";
import github from "../assets/experience-logos/github.png";
import heroku from "../assets/experience-logos/heroku.png";
import html from "../assets/experience-logos/html.png";
import javascript from "../assets/experience-logos/javascript.png";
import mongodb from "../assets/experience-logos/mongodb.png";
import netlify from "../assets/experience-logos/netlify.png";
import node from "../assets/experience-logos/node.png";
import postgresql from "../assets/experience-logos/postgresql.png";
import python from "../assets/experience-logos/python.png";
import reactImg from "../assets/experience-logos/react.png";
import redux from "../assets/experience-logos/redux.png";
import sqlite from "../assets/experience-logos/sqlite.png";
import tailwindcss from "../assets/experience-logos/tailwindcss.png";
import typescript from "../assets/experience-logos/typescript.png";

const Experience = () => {

    const tech = [
      {
        id: 1,
        src: antdesign,
        title: 'ANT Design',
        style: 'shadow-black'
      },
      {
        id: 2,
        src: bootstrap,
        title: 'Bootstrap',
        style: 'shadow-indigo-800'
      },
      {
        id: 3,
        src: css,
        title: 'CSS',
        style: 'shadow-gray-800'
      },
      {
        id: 4,
        src: cypress,
        title: 'Cypress',
        style: 'shadow-gray-500'
      },
      {
        id: 5,
        src: docker,
        title: 'Docker',
        style: 'shadow-sky-600'
      },
      {
        id: 6,
        src: elasticsearch,
        title: 'Elasticsearch',
        style: 'shadow-white'
      },
      {
        id: 7,
        src: javascript,
        title: 'Javascript',
        style: 'shadow-yellow-500'
      },
      {
        id: 8,
        src: mongodb,
        title: 'MongoDB',
        style: 'shadow-green-500'
      },
      {
        id: 9,
        src: github,
        title: 'Github',
        style: 'shadow-black'
      },
      {
        id: 10,
        src: heroku,
        title: 'Heroku',
        style: 'shadow-gray-600'
      },
      {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-black'
      },
      {
        id: 12,
        src: netlify,
        title: 'Netlify',
        style: 'shadow-sky-500'
      },
      {
        id: 13,
        src: node,
        title: 'Node',
        style: 'shadow-black'
      },
      {
        id: 14,
        src: postgresql,
        title: 'PostgreSQL',
        style: 'shadow-cyan-800'
      },
      {
        id: 15,
        src: python,
        title: 'Python',
        style: 'shadow-black'
      },
      {
        id: 16,
        src: reactImg,
        title: 'React',
        style: 'shadow-sky-400'
      },
      {
        id: 17,
        src: redux,
        title: 'Redux',
        style: 'shadow-purple-500'
      },
      {
        id: 18,
        src: sqlite,
        title: 'SQLite',
        style: 'shadow-indigo-800'
      },
      {
        id: 19,
        src: tailwindcss,
        title: 'Tailwind CSS',
        style: 'shadow-black'
      },
      {
        id: 20,
        src: typescript,
        title: 'Typescript',
        style: 'shadow-blue-500'
      },
      
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-teal-950 via-teal-950 to-gray-950 w-full h-screen">
       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">Skills and Technologies I've learned and worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">

        {
          tech.map(({id, src, title, style}) => (
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-50 py-2 rounded-lg ${style}`}
            >
            <img src={src} alt="" className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
          </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default Experience