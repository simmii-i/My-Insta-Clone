import { useDispatch, useSelector } from "react-redux";
import CommentSection from "./CommentSection";
import { toggleCommentSection } from "../utils/postsSlice";
import { useState } from "react";


const PostCard = ({info}) => {

  const {id,download_url,author} = info;
  const dispath = useDispatch()
  const isCommentOpen = useSelector((state)=> state?.posts?.commentSections[id]);
  const [isSaved, setIsSaved] = useState(false);

  const handleIconClick = () => {
    setIsSaved(!isSaved)
    
  };


 
  return (
    <div className="mainContainerBox flex">
    <div className='mainContainer border-2  border-black w-[45rem] h-[37rem]  m-5'>
    <h1 className="font-bold p-2"><i class="fa-regular fa-circle-user"></i> {author}</h1>
        <img className=' p-3 w-[44.5rem] h-[30rem]  ' src={download_url} alt=''/>
       
        <div className='iconBox ml-[6.5rem] md:ml-1 flex space-x-40'>
        
        <div><i onClick={()=>dispath(toggleCommentSection(id))} class="fa-solid fa-comment m-2 text-2xl cursor-pointer"> {isCommentOpen ? '❌' : ''} </i></div>
        <div> <i class="fa-solid fa-share-nodes m-2 text-2xl"></i></div>
        <div> <i  class={isSaved ? "fa-regular fa-bookmark m-2 text-2xl cursor-pointer" : "fa-solid fa-bookmark m-2 text-2xl cursor-pointer"} onClick={handleIconClick}></i>
        
        {isSaved && <p className="font-bold mr-4 self-center">Post Saved!</p> }
    
        </div>
         
        </div>
    </div>
    <div className=" ">
        
        {isCommentOpen && <CommentSection postId={id} />}


    {/* <Comment/> */}
     </div>

</div>
    
  )
}

export default PostCard

