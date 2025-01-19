import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import AddEducationModal from "../../components/shared/Modal";
import { useEffect, useState } from "react";
import AllEducationCard from "../../components/shared/AllEducationCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllEducationAction } from "../../redux/slices/educationSlice";

function AllEducation() {
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("userInfo"));
  const { education, error } = useSelector((state) => state.education);
  const isAdmin = user?.role === "PREGNANT_WOMAN";
  useEffect(() => {
    dispatch(getAllEducationAction());
  }, [dispatch]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddNew() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      {error && (
        <p className="text-red-500 text-center text-3xl ">Error: {error}</p>
      )}
      {isAdmin && (
        <button
          onClick={handleAddNew}
          type="button"
          className="text-white lg:absolute md:right-14 md:top-16 z-50 md:my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <MdOutlinePlaylistAddCircle className="text-lg me-2" />
          Add new
        </button>
      )}
      <AddEducationModal
        modelId="authentication-modal"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 md:p-12">
        {education?.map((item) => (
          <AllEducationCard
            key={item.id}
            videoUrl={item.videoUrl}
            title={item.title}
            content={item.content}
            type={item.type}
            recommended={item.recommendedForRiskLevel}
            id={item.id}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default AllEducation;
