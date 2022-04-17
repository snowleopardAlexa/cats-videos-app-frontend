import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function HomePage() {
  const { loading, error, data } = useFetch('http://localhost:1337/videos/')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: (</p>

  return (
    <> 
     <h2 className="text-5xl mt-8 text-center font-Bebas">Cats Videos</h2>
    <div className="grid grid-cols-2 gap-4">
     {data.map(video => (
           <div key={video.id} className="mx-auto rounded overflow-hidden shadow-inner">
           <div className="px-6 py-4">
             <img className="" src={video?.avatar?.url} alt="video-cover-img" width="400px" height="200px" />
             <h2 className="font-bold text-xl mb-2">{video.title}</h2>
             <h3>{video.year}</h3>
             <p className="text-gray-700 text-base">
               {video.body.substring(0, 200)}...
             </p>
           </div>
           <div>
           <Link to={`/videodetail/${video.slug}`}
            className="ml-12 mr-12 flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            WATCH NOW
           </Link>
           
           </div>

         </div>
    ))}
 </div>
    </>
  )
}


