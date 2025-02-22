"use client"

import React, { useState } from "react";
import { jobImage } from '@/src/assets'
import Image from 'next/image'
import jobs from '@/data/jobs';
import { toast } from 'react-toastify';
import { useParams, useRouter } from "next/navigation";
import { useProfileStore } from "@/store/store";
import { calculateMatchScore } from "@/config/utils";


  
function JobDetails() {

    const router = useRouter();
    const params = useParams(); 
    const [isApplying, setIsApplying] = useState(false);
    const job = jobs.find((job) => job.id === Number(params.id));

    const userSkills = useProfileStore((state) => state.skills);

    // Calculate match score
    // @ts-expect-error: job may be undefined, but we ensure it's handled properly
    const matchScore = calculateMatchScore(userSkills, job?.requiredSkills);

  // Match score color coding
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

   // Handle job application
   const applyForJob = async () => {
    if (!job) {
        toast.error("Job not found!", {
          position: "top-center",
          autoClose: 5000,
        });
        return;
      }
    
    if (matchScore < 50) {
        toast.error(`Your match score is low 😞. Consider learning: ${job?.requiredSkills.filter(skill => !userSkills.includes(skill)).join(", ")}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
      return;
    }
    setIsApplying(true);
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Mock API delay
    setIsApplying(false);
      // Save the job in Zustand store
    useProfileStore.getState().applyForJob(job);
    toast.success('Application submitted successfully ❤️‍🔥🎉', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
        router.push('/dashboard/applications');
  };


    const handleBackToJobs = () => {
      router.push('/dashboard');
    }    

  

    if (!job) {
      return <div className="text-center text-red-500">Job not found</div>;
    }
  return (
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
<div className="py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="md:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <Image className="w-full md:h-full md:object-cover" src={jobImage} alt="Job Image" width={500} height={500}/>
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button onClick={handleBackToJobs} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Back to Jobs</button>
          </div>
          <div className="w-1/2 px-2">
          <button
            onClick={applyForJob}
            disabled={isApplying}
            className="w-full flex justify-center items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            {isApplying ? (
                <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
            ) : (
                "Apply"
            )}
          </button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {job.company}
        </p>
        <div className="hidden md:flex mb-4">
          <div className="mr-4">
            <span className="font-bold whitespace-nowrap text-lg text-gray-700 dark:text-gray-300">Salary Range:</span>
            <span className="text-gray-600 text-sm whitespace-nowrap font-semibold dark:text-gray-300">{job.salary}</span>
          </div>
          <div className="sapce-x-3">
            <span className="font-bold text-lg text-gray-700 dark:text-gray-300">Location:</span>
            <span className="text-gray-600 font-semibold dark:text-gray-300">{job.location}</span>
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-3 mb-4">
          <div className="mr-4 gap-2">
            <span className="font-bold whitespace-nowrap text-gray-700 dark:text-gray-300">Salary Range:</span>
            <span className="text-gray-600 text-md whitespace-nowrap font-normal dark:text-gray-300">{job.salary}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Location:</span>
            <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Match Score:</span>
          <div className="flex items-center mt-2">
          <span className={`shrink-0 rounded-full px-3 ml-1 font-mono text-md font-medium tracking-tight text-white ${getScoreColor(matchScore)}`}>
              {matchScore}%
           </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                  <div className={`h-4 rounded-full ${getScoreColor(matchScore)}`} style={{ width: `${matchScore}%` }}></div>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Required Skills</span>
          <div className="flex items-center mt-2">
          {job.requiredSkills.map((skill, index) => (
            <button key={index}
                className={`py-2 px-1 md:px-4 text-xs md:text-md rounded-full font-semibold mr-2 ${userSkills.includes(skill) ? "bg-green-300 dark:bg-green-700 text-gray-900" : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white"}`}>
                {skill}
            </button>
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