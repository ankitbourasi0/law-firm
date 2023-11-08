import React, { useRef,useState ,useEffect} from "react";
import { submitComment } from "@/pages/api";
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEle = useRef();
  const nameEle = useRef();
  const emailEle = useRef();
  const storeDataEle = useRef();

//if name and email data save in local storage then use this   
useEffect(() => {

  nameEle.current.value = window.localStorage.getItem('name')
  emailEle.current.value = window.localStorage.getItem('email')


}, [])


  const  handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEle.current;
    const { value: name } = nameEle.current;
    const { value: email } = emailEle.current;
    const { checked: storeData } = storeDataEle.current;

    // if(!commentEle.current.value || !nameEle.current.value || !emailEle.current.value){
    //   setError(true)
    //   return
    // }
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white/40  shadow-lg rounded-lg  p-8  pb-12  mb-8">
      <h1 className=" text-xl   dark:text-zinc-700 mb-8 font-semibold border-b border-neutral-700 pb-4">
        Leave a Reply
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEle}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEle}
          className="py-2 px-4  outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEle}
          className="py-2 px-4  outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input
            ref={storeDataEle}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next time I comment.{" "}
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p> }
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 dark:bg-purple-600 dark:hover:bg-purple-800 text-lg rounded-full text-white px-8 py-3 cursor-pointer "
        >
          Post Comment  
        </button>
        {showSuccessMessage && (
          <span className="text-xl  float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;