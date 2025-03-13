export default function Skeleton() {
  return (
    <div className="w-[90%] md:w-full md:max-w-200 mx-auto shadow-2xl bg-Dark-grayish-blue px-6 pt-10 pb-15 rounded-xl mt-26 md:mt-0 relative animate-pulse">
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-20 mb-10 mx-auto"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full md:w-95 mb-4 mx-auto"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[85%] mb-4 mx-auto"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] mb-10 mx-auto"></div>
      <div className="h-0.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>

      <div className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-15 h-15 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  );
}
