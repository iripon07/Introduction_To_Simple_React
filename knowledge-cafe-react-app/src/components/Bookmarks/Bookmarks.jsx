import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {

  

  return (
    <div className="md:w-1/3">
      <div className="bg-[#6047EC1A] rounded-lg py-[21px] px-[48px] ml-6 mb-6">
        <h5 className="text-2xl font-bold text-[#6047EC]">
          Spend time on read: {} min
        </h5>
      </div>
      <div className="bg-[#1111110D] ml-6 p-[30px] rounded-lg">
        <div>
          <h5 className="text-2xl font-bold text-[#111111] mb-4">
            Bookmarked blogs: {bookmarks.length}
          </h5>
        </div>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
