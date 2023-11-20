import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { setFilePreview } from '../utils/addPostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const AddPost = () => {
  const [newPost, setNewPost] = useState(null)
  const {user} = useAuth0();
  // console.log("user info " + user.nickname)
  const dispath = useDispatch();
  const navigate = useNavigate()

  const handleFileChange = (event) =>{

    const file = event.target.files[0];
    setNewPost(file);
   
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      dispath(setFilePreview({
        id : (Math.random()*100),
        download_url : filePreviewUrl,
        author : user.nickname,
        
      })
      );
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("on submit " + newPost);
    navigate('/');
  }
  return (
    <form onSubmit={handleSubmit} className='bg-gray-100 rounded-md shadow-md border-2 border-black w-[60%] m-20 h-96'>
        <div className='w-[95%]  my-8 mx-4 font-bold '> Add Post Link : <input type='file' accept='image/*' onChange={handleFileChange} className='bg-gray-200 p-3 top-8 m-4 w-[70%] rounded-md border-2 border-black'/></div>
        
        {/* {filePreview && (
        <div className='my-4 mx-4'>
          <h3>Selected Image Preview:</h3>
          <img src={filePreview} alt='Selected' className='max-w-[200px] max-h-[200px]' />
        </div>
      )} */}
        
        <button className='m-5 bg-blue-600 border border-black rounded-md p-2 mx-[45%] text-white' type='submit'>Add-Post</button>
        
    </form>
  )
}

export default AddPost