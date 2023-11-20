import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { PHOTO_API } from './constant';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
//import { selectFilePreview } from '../utils/addPostSlice';

const PostContainer = () => {

const filePreview = useSelector((state) => state.filePreview);
console.log(filePreview)
const [post,setPost] = useState([]);

useEffect(()=>{
    getPhotos();
},[])

const getPhotos = async ()=>{
    const data = await fetch(PHOTO_API)
    const json = await data.json();
    setPost(json)
    console.log(json)

}

return post?.length===0 ?  <Shimmer/> : (
  <>
    <span>
    {console.log(post[0])}
    {console.log(filePreview[0])}
    {/* { filePreview[0].download_url && <PostCard info={filePreview[0]} key={filePreview[0].id} ></PostCard>*/}
    {filePreview[0]?.download_url && filePreview.map((newPost)=> <PostCard info={newPost} key={newPost?.id} ></PostCard> )}
    {post.map((photo)=>  <PostCard key={photo?.id} info={photo} /> )}
    {/* <PostCard key={post[0].id} info={post[0]} /> */}
    </span>
    </>
  )
}

export default PostContainer