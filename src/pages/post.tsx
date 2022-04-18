import React from 'react';
import { useParams } from 'react-router'
import { usePost } from "./graph-ql-request";
import PostCard from "./PostCard";

const Post = () => {

  const {id} = useParams<{ id: string }>();
  const {data, isLoading, error} = usePost({queryKey: {postId: id}})
  console.log(data)

  return (<div>
      {isLoading ? <p> is loading</p> : <PostCard post={data}/>}
    </div>
  )
}

export default Post
