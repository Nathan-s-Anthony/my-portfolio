import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
const Header = () => {

  return (

    <>

      <div className=" bg-gradient-to-r from-blue-400 to-blue-500 w-full flex md:flex-row items-center justify-end gap-5 py-6 px-6 ">
        <div className="text-md font-bold text-white relative mr-5">Connect with me</div>
        <a href="/" className="text-white">Github</a>
        <a href="/" className="text-white">Twitter</a>
        <a href="/" className="text-white">Codepen</a>
        <a href="/" className="text-white">Github</a>

      </div>

      <header className=" flex-row min-w-full    flex-wrap content-start items-start justify-center gap-5 flex  z-1">
        <nav className="flex flex-row flex-wrap w-full h-full md:container   items-center mt-10 ">
          <div className=" relative w-3/6">
            <div className="relative flex justify-end "> 
            <div className="absolute left-15 top-0 w-32 h-32"> 
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F2F4F8" d="M59.2,-20C67.2,5.3,57.5,35.6,35.5,52.4C13.4,69.3,-21,72.8,-42.6,57.4C-64.2,42,-73,7.7,-63.7,-19.3C-54.5,-46.3,-27.3,-66,-0.8,-65.8C25.6,-65.5,51.3,-45.2,59.2,-20Z" transform="translate(100 100)" />
            </svg>
              </div>   
          </div>

         
            <div className="p-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-32 ">
              <Images />

            </div>
          </div>
          <div className="w-3/6 ">
            <ul className="w-full flex flex-row flex-wrap justify-flex-end ">
              <li className="w-full flex flex-row flex-wrap justify-between content-center text-xl items-center " >
                <a href="/" className="font-medium text-2xl tracking-wide text-primary">Home</a>
                <a href="/" className="font-medium text-2xl text-primary">About</a>
                <a href="/" className="font-medium  text-2xl text-primary" >Projects</a>
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