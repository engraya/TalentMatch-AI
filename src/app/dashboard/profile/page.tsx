import React from 'react';
import { profile } from '@/data/profile';
import Image from 'next/image';


function ProfilePage() {
  return (
    <div className="p-4">
      <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
        {/* Top Content */}
        <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image src={profile.profileImage} alt={profile.name} height={300} width={300}/>
          </div>
          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              {profile.name}
            </p>
            <p className="text-heading">{profile.role}</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              {/* Contact Section */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div>Email: {profile.contact.email}</div>
                <div>Phone: {profile.contact.phone}</div>
                <div>Address: {profile.contact.address}</div>
              </div>
              
              {/* Skills Section */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div>
                {profile?.skills?.map((skill, index) => (
                  <div key={index} className="flex items-center my-1">
                    <div className="ml-2">{skill.name}</div>
                  </div>
                ))}

                </div>
              </div>
              
              {/* Education Section */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col space-y-1">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">{edu.year}</p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">{edu.degree}</span>, {edu.institution}
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: {edu.percentage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="flex flex-col sm:w-2/3 sm:-mt-10">
              {/* About Me */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <p>{profile.about}</p>
              </div>
              
              {/* Experience */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col">
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col mt-8">
                      <p className="text-lg font-bold text-gray-700">{exp.company} | {exp.role}</p>
                      <p className="font-semibold text-sm text-gray-700">{exp.duration}</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        {exp.responsibilities.map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Projects */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col">
                  {profile.projects.map((project, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">{project.name}</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
