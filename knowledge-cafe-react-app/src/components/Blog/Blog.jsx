import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    reading_time,
    posted_date,
    hashtag,
    author_img,
    author,
  } = blog;

  console.log(title, hashtag, author_img);

  return (
    <div className="mb-9">
      <img src={cover} alt="" />
      <div className="flex justify-between items-center mt-8">
        <div className="flex justify-between items-center ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h5 className="font-bold text-2xl text-[#111111]">{author}</h5>
            <p className="text-[#11111199] font-semibold text-base">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-xl text-[#11111199]">
            {reading_time} min read
          </p>
          <button onClick={()=>handleAddToBookmark(blog)}>
            <FaRegBookmark className="text-[#11111199] ml-3" />
          </button>
        </div>
      </div>
      <h4 className="text-4xl font-bold text-[#111111] mb-4">{title}</h4>
      <p>
        {hashtag.map((tag, idx) => (
          <a
            className="mr-4 text-xl font-medium text-[#11111199]"
            key={idx}
            href=""
          >
            {tag}
          </a>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func.isRequired,
};
export default Blog;
