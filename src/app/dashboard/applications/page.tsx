"use client";


import React, { useState, useEffect } from "react";
import { useProfileStore } from "@/store/store";
function Applications() {
    const [loading, setLoading] = useState(true);
    const appliedJobs = useProfileStore((state) => state.appliedJobs);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer); 
    }, []);


  return (
    <div className='p-4'>
        <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">My Applications</h2>
        </div>
    <div className="flex flex-col">
  <div className=" overflow-x-auto pb-4">
    <div className="min-w-full inline-block align-middle">
      <div className="overflow-hidden  border rounded-lg border-gray-300">
        <table className="table-auto min-w-full rounded-xl">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">Title</th>
              <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">Company</th>
              <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">Location</th>
              <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">Salary</th>
              <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Status </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 ">
          {loading ? (
                    <tr>
                      <td colSpan={5} className="p-5 text-center">
                        <div className="flex justify-center items-center">
                          <svg
                            className="animate-spin h-8 w-8 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                          Loading Applications...
                        </div>
                      </td>
                    </tr>
                  ) : appliedJobs.length > 0 ? (
                    appliedJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="bg-white transition-all duration-500 whitespace-nowrap hover:bg-gray-50"
                      >
                        <td className="p-5 text-sm whitespace-nowrap font-bold text-gray-900">
                          {job.title}
                        </td>
                        <td className="p-5 text-sm whitespace-nowrap font-medium text-gray-900">
                          {job.company}
                        </td>
                        <td className="p-5 text-sm whitespace-nowrap font-medium text-gray-900">
                          {job.location}
                        </td>
                        <td className="p-5 text-sm whitespace-nowrap font-medium text-gray-900">
                          {job.salary}
                        </td>
                        <td className="p-5 text-sm whitespace-nowrap font-medium text-gray-900">
                          <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
                            <svg
                              className="w-6 h-6 text-green-500 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 11.917 9.724 16.5 19 7.5"
                              />
                            </svg>
                            <span className="font-semibold text-xs text-emerald-600">
                              Applied
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-5 text-center text-gray-500">
                        No applied jobs yet.
                      </td>
                    </tr>
                  )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>


  )
}

export default Applications