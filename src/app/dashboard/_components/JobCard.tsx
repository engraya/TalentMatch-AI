"use client"

import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { TbScoreboard } from "react-icons/tb";
import { useProfileStore } from "@/store/store";
import { calculateMatchScore } from "@/config/utils";
import { JobCardProps } from '@/types';



function JobCard({job} : JobCardProps) {

      const userSkills = useProfileStore((state) => state.skills);
  
        // Calculate match score
    const matchScore = calculateMatchScore(userSkills, job?.requiredSkills);
  
    // Match score color coding
    const getScoreColor = (score: number) => {
      if (score >= 80) return "bg-green-500";
      if (score >= 50) return "bg-yellow-500";
      return "bg-red-500";
    };
  


  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg flex flex-col transform transition duration-500 hover:scale-105">
  <div className="relative">
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
      </div>
    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
        New
      </div>
  </div>
  <div className="px-6 py-4 mb-auto">
  <h2 className="text-md md:text-xl font-bold mb-2 text-gray-800">{job.title}</h2>
    <p className="text-gray-500 text-md italic font-medium">
      {job.company}
    </p>
    
  </div>
  <div className="flex items-center px-6">
  <svg className="w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
    </path>
  </svg>
  <span className="text-md md:text-xl font-bold text-gray-800">{job.salary}</span>
</div>

  <div className="px-2 py-2 space-y-2">
  {job?.requiredSkills?.map((skill, index) => (
    <span
      key={index}
      className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-normal text-gray-700 mr-2"
    >
      {skill}
    </span>
  ))}
</div>

  <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-200">
    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <TbScoreboard />
     <span className={`shrink-0 rounded-full px-3 ml-1 font-mono text-md font-medium tracking-tight text-white ${getScoreColor(matchScore)}`}>
      {matchScore}%
      </span>
    </span>
    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <FaLocationDot />
      <span className="ml-1">{job.location}</span>
    </span>
  </div>
</div>

  )
}

export default JobCard