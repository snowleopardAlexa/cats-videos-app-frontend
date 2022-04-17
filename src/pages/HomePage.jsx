import useFetch from '../hooks/useFetch'
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  const { loading, error, data } = useFetch('http://localhost:1337/videos')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: (</p>

  return (
    <> 
     <h2 className="text-5xl mt-8 text-center font-Bebas">Cats Videos</h2>
    <div className="grid grid-cols-2 gap-4">
     {data.map(video => (
        <VideoCard
          key={video.id}
          image={video.image}
          year={video.year}
          title={video.title}
          body={video.body}
       />
    ))}
 </div>
    </>
  )
}


