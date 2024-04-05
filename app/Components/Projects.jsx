import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Yoga Friends Website",
    description: "HTML, CSS, Javascript",
    image: "/images/projects/Yoga-friend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Naush-zd/Yoga-Friend-Website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "How's the Weather?",
    description: "HTML, CSS, Javascript, API",
    image: "/images/projects/Weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Naush-zd/Weather-project",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Dear-Diary",
    description: "HTML, CSS,Javascript, Firebase",
    image: "/images/projects/Dear-Diary.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Naush-zd/Notes-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Yum Eats",
    description: "React,Tailwind CSS, Firebase",
    image: "/images/projects/Yum-Eats.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Naush-zd/Yum-Eats",
    previewUrl: "/",
  },
];


const Projects = () => {
  return (
    <><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))
      }
      </div>
    </>
  )
}

export default Projects