const VideoCard = ({ id, title, year, body, image }) => {
  return (
    <div key={id}>
       <img width="560" height="315" src={image} alt=""></img>
         <h2>{title}</h2>
         <h3>{year}</h3>
         <p>{body}</p>
    </div>
  )
}

export default VideoCard