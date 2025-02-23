// import React from "react";

// const SpinnerLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default SpinnerLoader;


// const SpinnerLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-12 h-12 bg-blue-500 rounded-full animate-ping"></div>
//     </div>
//   );
// };

// export default SpinnerLoader;
// const SpinnerLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen space-x-2">
//       <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
//       <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
//       <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-400"></div>
//     </div>
//   );
// };

// export default SpinnerLoader;
// const SpinnerLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-16 h-16 border-4 border-blue-500 border-opacity-50 rounded-full border-t-transparent animate-spin"></div>
//     </div>
//   );
// };

// export default SpinnerLoader;
// const SpinnerLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default SpinnerLoader;
const SpinnerLoader = () => {
  return (
    <div className="p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SpinnerLoader;




