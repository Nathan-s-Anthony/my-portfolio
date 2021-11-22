import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
const Header = () => {

  return (

    <>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-blue-500 w-full md:flex md:flex-row items-center justify-end gap-5 py-6 px-6 h-10">
       <div className="text-md font-bold text-white relative mr-5">Connect with me</div>
      </div>
      <header className=" 2xl:container md:container  flex-row min-w-full  absolute top-10 left-0  flex-wrap content-start items-start justify-center gap-5 flex mt-10 z-1">
        <nav className="flex flex-row flex-wrap  2xl:container items-center ">
          <div className=" relative w-3/6">
            <div className="p-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-32 ">
              <Images />
            </div>
          </div>
          <div className="w-3/6 ">
            <ul className="w-full flex flex-row flex-wrap justify-flex-end ">
              <li className="w-full flex flex-row flex-wrap justify-between content-center text-xl items-center " >
                <a href="/" className="font-bold text-xl tracking-wide">Home</a>
                <a href="/" className="font-medium text-xl">About</a>
                <a href="/" className="font-medium  text-xl" >Projects</a>
                <button className=" transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700   items-center justify-center px-10 py-5 border border-transparent  text-xl font-medium rounded-md   0 text-medium text-white tracking-wide md:block  ">Get in touch</button>
                <MoonIcon className="w-8 h-8" />
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}

export { Header };