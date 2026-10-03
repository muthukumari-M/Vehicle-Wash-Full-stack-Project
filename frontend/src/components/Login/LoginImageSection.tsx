import { Sparkles } from "lucide-react";
function LoginImageSection() {
  return (
    <div className="w-2/5 px-12 pt-10 bg-sky-950 rounded-r-3xl ">
      {/* Image area */}

      <div className="w-full h-1/3 bg-[url('/images/car14.jpg')] bg-cover bg-center rounded-2xl"></div>
      <div className="flex w-full h-1/3 gap-2 mt-2 mb-10">
        <div className="w-full  bg-[url('/images/car5.jpg')] bg-cover bg-center rounded-2xl"></div>
        <div className="w-full bg-[url('/images/car4.jpg')] bg-cover bg-center rounded-2xl"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-center px-6  ">
        <div className="flex justify-center items-center  gap-2">
          <Sparkles className="text-gray-300" />
          <h1 className="text-white text-3xl font-bold">Sparkle Wash</h1>
        </div>
        <p className="text-gray-500 font-semibold leading-5 mt-3 mb-6">
          makes it easy to manage customers, vehicles, wash services, and daily
          records in one place.
        </p>
      </div>
      <div className="flex  justify-center items-center gap-3">
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}
export default LoginImageSection;
