import React from "react";

const AppLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-pulse flex space-x-4">
        <div className="bg-gray-400 h-12 w-12 rounded-full"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <p className="mt-4 font-bold text-gray-500">Loading...</p>
    </div>
  );
};

export default AppLoading;
