import { useParams } from 'react-router-dom'

const VideoDetail = () => {

  const { slug } = useParams()

  return (
    <div>
     <h2>Video Details - { slug } </h2>
    </div>
  )
}

export default VideoDetail