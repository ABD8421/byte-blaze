import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import { RiDeleteBin2Fill } from "react-icons/ri";


const BlogCart = ({ blog, deletable,handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div className="flex relative">
      <div className="p-2 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-3">
        <Link
          to={`/blog/${id}`}
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImage}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
      {deletable && <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:bg-opacity-100 bg-opacity-60 cursor-pointer hover:scale-105 overflow-hidden -top-2 -right-2"><RiDeleteBin2Fill className="text-2xl text-secondary"/></div>}
    </div>
  );
};

export default BlogCart;
