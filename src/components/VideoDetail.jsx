import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const VideoDetail = () => {

  const { slug } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/videos/' + slug)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : (</p>

  console.log(data)

  return (
    <div className="">
      <iframe className="" src={data?.movie?.url} title="cat-video" width="400px" height="200px"></iframe>
      <h2 className="">{data.title}</h2>
      <h3 className="">{data.year}</h3>
      <p className="">{data.body}</p>
      <p>{data.enabled}</p>
    </div>
  )
}

export default VideoDetail