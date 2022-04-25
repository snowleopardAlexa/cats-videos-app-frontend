// child 
import { useState } from 'react'
const EditContent = ({ setOpenModal, data, editItem }) => { 

// change state of data
const initialValue = {
  title: data.title,
  year: data.year,
  body: data.body
}

const [content, setContent] = useState(initialValue)

/*

const [formItems, setFormItems] = useState({
  title: data.title, 
  year: data.year,
  body: data.body
})
*/


// enable EDIT 
const handleChange = (e) => {
  console.log(e.target.value)
  const {name, value} = e.target

  setContent(prev => {
    return { 
      ...prev,
      [name]: value
    }
  })
} 

const [message, setMessage] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  editItem(content)
}


  return (
    <>
      {/* main modal */}
      <div
        id="defaultModal"
        tabIndex="-1"
        ariahidden="true"
        className="animate-fade-in-down"
      >
        <div className="relative p-4 w-full mx-auto md:mx-auto max-w-2xl h-full md:h-auto">
          {/* modal content */}
          <div className="relative rounded-lg shadow bg-[#FBFBF9]">
            {/* modal header */}
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-300">
              <h3 className="text-xl font-semibold text-gray-700 lg:text-2xl">
                Edit Content
              </h3>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* modal body */}
            <div className="p-6 space-y-6">
              {/* edit form */}
              <form onSubmit={handleSubmit}>
                {/* title form */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    forhtml="title"
                    
                  >
                    Title
                  </label>
                  <input
                    value={content.title}
                    name="title"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Title"

      
                  />
                </div>

                {/* title year */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    forhtml="year"
                  >
                    Year
                  </label>
                  <input
                    name="year"
                    value={content.year}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="year"
                    type="number"
                    placeholder="Year"
                  />
                </div>

                {/* title body */}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    forhtml="body"
                  >
                    Body
                  </label>
                  <textarea
                     name="body"
                     value={content.body}
                     onChange={handleChange}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    placeholder="Body"
                  ></textarea>
                </div>
              </form>
            </div>

            {/* modal footer */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-300">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Leave now!
              </button>
              <button
              
                data-modal-toggle="defaultModal"
                type="button"
                data-dismiss="modal"
                className="bg-teal-600 hover:bg-red-500 text-white focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5"
              >
                Save
              </button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
  </div>
  </div>
  </div>
    </>
  );
};

export default EditContent;
