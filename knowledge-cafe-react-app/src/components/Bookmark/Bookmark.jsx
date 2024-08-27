import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
        
      <div className="bg-[#FFFFFF] rounded-lg mb-4">
        <h3 className="font-semibold text-[#111111] text-lg p-5">{title}</h3>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
