"use client"

import React from 'react'
import { jobImage } from '@/src/assets'
import Image from 'next/image'
import jobs from '@/data/jobs';
import { useParams, useRouter } from "next/navigation";

function JobDetails() {

    const router = useRouter();
    const params = useParams(); 

    const handleBackToJobs = () => {
      router.push('/dashboard');
    }    

    const job = jobs.find((job) => job.id === Number(params.id));

    if (!job) {
      return <div className="text-center text-red-500">Job not found</div>;
    }
  return (
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
<div className="py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <Image className="w-full h-full object-cover" src={jobImage} alt="Job Image" width={500} height={500}/>
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button onClick={handleBackToJobs} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Back to Jobs</button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Apply</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {job.company}
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Salary Range:</span>
            <span className="text-gray-600 dark:text-gray-300">{job.salary}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Location:</span>
            <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Match Score:</span>
          <div className="flex items-center mt-2">
      <span className="shrink-0 rounded-full bg-red-500 px-3 ml-1 font-mono text-md font-medium tracking-tight text-white">{job.matchScore}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Required Skills</span>
          <div className="flex items-center mt-2">
          {job.requiredSkills.map((skill, index) => (
                <button key={index} className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{skill}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>


  )
}

export default JobDetails