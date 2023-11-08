import React from 'react'
import { getAllPost, getPostDetail } from '../api';
import PostDetail from '@/components/PostDetail';
import Author from '@/components/Author';
import CommentsForm from '@/components/CommentsForm';
import Comments from '@/components/Comments';
import PostWidget from '@/components/PostWidget';
import Categories from '@/components/Categories';


//params is come in the function getStaticProps &
// the return from getStaticProps, comes in the BlogPost({})
export async function getStaticProps({params}){
  const result = await getPostDetail(params.slug);
  return{
    props:{post:result}
  };
} 


export async function getStaticPaths(){
  const data= await getAllPost();

  return{
    paths: data.posts.map(({slug})=>({params:{slug}})),
    fallback:false
  };
}
const BlogPost = ({post}) => {

  console.log("this is answer:\n",post)
  return (
    <div className="container mx-auto py-8 px-10  bg-gradient-to-br from-lime-200 to-lime-400">
    <div className="grid  grid-cols-1 lg:grid-cols-12 gap-8 ">
      <div className="col-span-1 lg:col-span-8 ">
        <PostDetail post={post}/>
        <Author author={post.author} /> 
        <CommentsForm slug={post.slug}/>
        <Comments slug={post.slug}/>
      </div>

      <div className="col-span-1 lg:col-span-4">
        <div className="relative lg:sticky top-8">
          <PostWidget slug={post.slug} categories={post.categories.map((cat)=>cat.slug)}/>
          <Categories />
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogPost