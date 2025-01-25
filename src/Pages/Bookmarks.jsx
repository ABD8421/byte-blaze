import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCart from "../components/BlogCart";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        const storedBlogs =getBlogs;
        setBlogs(storedBlogs);
    },[])

    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs =getBlogs;
        setBlogs(storedBlogs);
    }
    if(blogs.length<1) return <EmptyState address={'/blogs'} label={'Go to Blogs'} message={'No Bookmarks available'}></EmptyState>

    return (
        <div>
            <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog => <BlogCart handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCart>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;