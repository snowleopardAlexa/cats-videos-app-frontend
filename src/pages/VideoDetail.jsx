import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import catcool from "../img/cat-cool.png";
import catnotcool from "../img/cat-not-cool.png";
import videoedit from "../img/video-edit.png";
import EditContent from "../components/EditContent";

const VideoDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [like, setLike] = useState(true);
  const [count, setCount] = useState(0);
  const { id } = useParams()
  const {loading, error, data } = useFetch("http://localhost:1337/videos/" + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : (</p>

  console.log(data);

  return (
    <>
      {/* card video */}
      <div className="mt-32 md:mt-40 mb-12 md:mb-2 ml-6 mr-6 rounded-[18px] overflow-hidden shadow-lg">
        <div
          id="responsiveVideoWrapper"
          className="relative h-0 pb-fluid-video"
        >
          <div className="mx-auto rounded overflow-hidden shadow-inner">
            {/* video */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={data?.movie?.url}
              title="cat-video"
              height="500px"
            ></iframe>
          </div>
        </div>
        <div className="px-6 py-8">
          {/* title */}
          <h2 className="font-bold text-4xl lg:text-5xl mb-2 font-Bebas">
            {data?.title}
          </h2>
          {/* year */}
          <h3 className="text-gray-700 text-1xl md:text-2xl lg:text-3xl mb-2">
            {data?.year}
          </h3>
          {/* body */}
          <p className="text-md md:text-lg lg:text-xl">{data?.body}</p>
        </div>
        <div className="ml-4 mr-4 mt-4 mb-8 flex flex-row justify-center">
          {/* like button */}
          <div className="mr-2">
            <p className="text-gray-700 text-sm md:text-lg text-center">
              I am a cat and I demand a like!
            </p>
            <span onClick={() => setLike((prevLike) => !prevLike)}>
              {like ? (
                <img
                  onClick={() => setCount(count + 1)}
                  src={catnotcool}
                  className="w-12 md:w-18 mx-auto mt-4"
                  alt="cat-like"
                />
              ) : (
                <img
                  onClick={() => setCount(count - 1)}
                  src={catcool}
                  className="w-12 md:w-18 mx-auto mt-4"
                  alt="cat-not-like"
                />
              )}
            </span>
            <p className="mt-2 md:text-lg text-center text-pink-600 font-Fascinate">
              Likes: {count}
            </p>
          </div>
          {/* edit video */}
          <div className="ml-8">
            <p className="text-gray-700 text-sm md:text-lg text-center">
              No like?! Do it better! Edit my content!
            </p>
            <span>
              <img
                 onClick={() => {
                  setModalOpen(true);
                }}
                data-modal-toggle="defaultModal"
                className="w-12 md:w-18 mt-4 mx-auto"
                src={videoedit}
                alt="cat-like"
              />
            </span>
          </div>
        </div>
      </div>
      {modalOpen && <EditContent setOpenModal={setModalOpen} />}
    </>
  );
};

export default VideoDetail;
