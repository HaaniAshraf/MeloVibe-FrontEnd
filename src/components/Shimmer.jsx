import React from 'react'

const Shimmer = () => {
    return (
        <div className="animate-pulse flex flex-col items-center justify-center mb-4 border-gray-800 border-2 px-5 md:px-14 py-5 rounded-xl mt-2">
          <div className="w-36 h-36 bg-gray-800 rounded-full"></div>
          <div className="mt-4">
            <div className="w-32 h-5 bg-gray-800 mb-2"></div>
            <div className="w-32 h-4 bg-gray-800"></div>
          </div>
        </div>
      );
    };

export default Shimmer