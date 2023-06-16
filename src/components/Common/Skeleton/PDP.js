import React from 'react'

function PDP() {
  return (
    <div className="container mx-auto py-10">
    <div className="flex flex-wrap justify-between">
      <div className="w-full lg:w-1/2">
        <div className="animate-pulse bg-gray-200 rounded-lg mb-4 h-96"></div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="pl-4">
          <h1 className="text-3xl font-bold animate-pulse bg-gray-200 h-8 mb-4 w-2/3"></h1>
          <div className="flex items-center mb-4">
            <span className="animate-pulse bg-gray-200 h-6 w-6 rounded-full mr-2"></span>
            <span className="animate-pulse bg-gray-200 h-6 w-32 rounded-full"></span>
          </div>
          <div className="animate-pulse bg-gray-200 h-4 w-1/3 mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-2/3 mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-1/2"></div>
          <div className="flex items-center mt-8">
            <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-lg mr-4"></div>
            <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PDP