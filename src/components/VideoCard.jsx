import { useNavigate } from "react-router-dom"
//import VideoDetail from "./VideoDetail"

const VideoCard = ({ id, title, year, body, image }) => {

  let navigate = useNavigate()

  return (
    <div key={id} className="mx-auto rounded overflow-hidden shadow-inner">
    <img className="" src={image} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
      <h3>{year}</h3>
      <p class="text-gray-700 text-base">
        {body}
      </p>
    </div>
    <div>
    <button 
      onClick={() => {
        navigate("/videodetail")
      }}
      className="ml-12 mr-12 flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
        WATCH NOW
      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    
    </div>
  
  </div>
  )
}

export default VideoCard