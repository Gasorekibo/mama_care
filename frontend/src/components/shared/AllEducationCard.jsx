import { PropTypes } from "prop-types";
import VideoPlayer from "./VideoPlayer";
function AllEducationCard({ videoUrl, title, content, type, recommended }) {
  return (
    <div className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="mb-1 block text-sm leading-6 text-blue-700 my-4">
            {type}
          </span>
          {title}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>{content}</p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href=""
        >
          Learn more
          <span className="sr-only"> {recommended}</span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
      </div>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
}

AllEducationCard.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recommended: PropTypes.string.isRequired,
};

export default AllEducationCard;
