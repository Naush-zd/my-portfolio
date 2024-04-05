"use client";
import React, {useState,useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Next.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Bachelor's of Technology in Computer Science</li>
          <li>SRMCEM, Lucknow</li>
        </ul>
      ),
    },
    {
      title: "Internships",
      id: "internships",
      content: (
        <ul className="list-disc pl-2">
          <li>The Digital Geek: Frontend Web Developer</li>
          <li>Tech-Gyan: SQL training</li>
            <li>IBM: AI/ML</li>
        </ul>
      ),
    },
    {
      title: "Co-Curricular",
      id: "activities",
      content: (
        <ul className="list-disc pl-2">
          <li>Content Writing</li>
          <li>Public Speaking</li>
            <li>Sketching</li>
        </ul>
      ),
    },
  ];
  

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
      };
  return (
   <section className='text-white'> 
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src={'/images/about-image.png'} width={500} height={500} alt='About Image' />
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className='text-4xl font-bold text-white mb-4 mt-2 md:mt-0'>About Me</h2>
            <p className='text-xs md:text-sm '>
            I am Nausheen Noor Zaidi, currently pursuing a Bachelor's degree in Computer Science at SRMGPC, Lucknow. My academic journey has been marked by a keen interest in programming languages, particularly C++ and C, which I have honed through theoretical studies and practical application in developing basic front-end web projects.<br/>
As I navigate through my academic and professional journey, I am excited about the challenges and opportunities that lie ahead. With professionalism, diligence, and a commitment to continuous improvement, I am confident in my ability to contribute positively to the dynamic field of technology.
          </p>
        
        <div className='flex flex-row justify-start mt-8'>
           <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
            {" "}
           Skills{" "}
           </TabButton>
           <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
            {" "}
            Education
            {" "}
            </TabButton>
           <TabButton selectTab={() => handleTabChange("internships")} active={tab === "internships"}>
            {" "} Internships {" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("activities")} active={tab === "activitiess"}>
            {" "} Co-Curricular {" "}
            </TabButton>
        </div>
        <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
       
        </div>
   </section>
  )
}

export default AboutSection