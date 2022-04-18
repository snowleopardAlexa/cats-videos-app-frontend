import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import catcool from "../img/cat-cool.png";
import videoedit from "../img/video-edit.png";

const VideoDetail = () => {
  const { slug } = useParams();
  const { loading, error, data } = useFetch(
    "http://localhost:1337/videos/" + slug
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : (</p>;

  console.log(data);

  return (
    <div className="mt-40 mb-20 ml-6 mr-6 rounded-[18px] overflow-hidden shadow-lg">
      {/* card video */}
      <div className="mx-auto rounded overflow-hidden shadow-inner">
        {/* video */}
        <iframe
          className="w-full"
          src={data?.movie?.url}
          title="cat-video"
          height="500px"
        ></iframe>
        <div className="px-6 py-8">
          {/* title */}
          <h2 className="font-bold text-5xl mb-2 font-Bebas">{data.title}</h2>
          {/* year */}
          <h3 className="text-gray-700 text-2xl mb-2">{data.year}</h3>
          {/* body */}
          <p className="text-xl">{data.body}</p>
        </div>
        <div className="mt-4 mb-8 flex flex-row justify-center">
          {/* like */}
          <div className="mr-4">
            <h3 className="text-gray-700">I am a cat and I demand a like!</h3>
            <span>
              <img
                className="mt-4 mx-auto"
                src={catcool}
                width="60px"
                height="60px"
                alt="cat-like"
              />
            </span>
            <p className="text-center mt-2">1</p>
          </div>
          {/* edit video */}
          <div className="ml-8">
            <h3 className="text-gray-700">
              Likewise, do it better! Edit my video!
            </h3>
            <span>
              <img
                className="mt-4 mx-auto"
                src={videoedit}
                width="60px"
                height="60px"
                alt="cat-like"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
