import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="min-h-screen">
      <div className='relative px-5 py-6 mb-5 rounded-lg bg-gradient-to-top'>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2'>
          <Image className='object-contain opacity-20' src="/astronaut.png" alt="" fill />
        </div>
        <div className='flex flex-col gap-6'>
          <span className='font-bold'>🔥 Available Now</span>
          <h3 className='text-2xl'>
            How to use the new version of the admin dashboard?
          </h3>
          <span className='font-semibold text-softText'>Takes 4 minutes to learn</span>
          <p className='text-softText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='p-2 flex items-center gap-3 bg-[#5d57c9] text-white border-none cursor-pointer rounded-md'>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className='relative px-5 py-6 mb-5 rounded-lg bg-gradient-to-top'>
        <div className='flex flex-col gap-6'>
          <span className='font-bold'>🚀 Coming Soon</span>
          <h3 className='text-2xl'>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className='font-semibold text-softText'>Boost your productivity</span>
          <p className='text-softText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='p-2 flex items-center gap-3 bg-[#5d57c9] text-white border-none cursor-pointer rounded-md'>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
