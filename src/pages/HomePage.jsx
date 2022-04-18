import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function HomePage() {
  const { loading, error, data } = useFetch("http://localhost:1337/videos/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: (</p>;

  return (
    <>
      <h2 className="mt-40 text-5xl text-center font-Bebas">Cats Videos</h2>
      <div className="bg-gray-100 mt-12 mb-20 grid grid-cols-2 gap-4">
        {data.map((video) => (
          <div
            key={video.id}
            className="mx-auto rounded overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-4">
              {/* avatar */}
              <img
                className="w-full mt-2"
                src={video?.avatar?.url}
                alt="video-cover-img"
                width="400px"
                height="200px"
              />
              {/* title */}
              <h2 className="font-bold text-xl mb-2">{video.title}</h2>
              {/* year */}
              <h3>{video.year}</h3>
              {/* body */}
              <p className="text-gray-700 text-base">
                {video.body.substring(0, 200)}...
              </p>
            </div>
            <div>
              {/* slug */}
              <Link
                to={`/videodetail/${video.slug}`}
                className="ml-12 mr-12 flex justify-center items-center text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                WATCH NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
