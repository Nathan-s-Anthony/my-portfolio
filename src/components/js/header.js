import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
const Header = () => {

  return (

    <>

      <div className=" bg-gradient-to-r from-blue-400 to-blue-500 w-full flex md:flex-row items-center justify-end gap-5 py-6 px-6 ">
       <div className="text-md font-bold text-white relative mr-5">Connect with me</div>
       <a href="/" className="text-white">Github</a>
       <a href="/"  className="text-white">Twitter</a>
       <a href="/"  className="text-white">Codepen</a>
       <a href="/"  className="text-white">Github</a>
 
      </div>
      
      <header className=" flex-row min-w-full    flex-wrap content-start items-start justify-center gap-5 flex  z-1">
        <nav className="flex flex-row flex-wrap w-full h-full md:container   items-center mt-10 ">
          <div className=" relative w-3/6">
            <div className="p-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-32 ">
              <Images />
            </div>
          </div>
          <div className="w-3/6 ">
            <ul className="w-full flex flex-row flex-wrap justify-flex-end ">
              <li className="w-full flex flex-row flex-wrap justify-between content-center text-xl items-center " >
                <a href="/" className="font-medium text-2xl tracking-wide">Home</a>
                <a href="/" className="font-medium text-2xl">About</a>
                <a href="/" className="font-medium  text-2xl" >Projects</a>
                <button className=" transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700   items-center justify-center px-8 py-5 border border-transparent  text-xl font-medium rounded-md   0 text-medium text-white tracking-wide   ">Get in touch</button>
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