import useFetch from '../hooks/useFetch'
import VideoCard from "../components/VideoCard";

const HomePage = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/videos')

  

  return (
    <> 
     <h2 className="text-5xl mt-8 text-center font-Bebas">Cats Videos</h2>
     <VideoCard />
    </>
  );
};

export default HomePage;
