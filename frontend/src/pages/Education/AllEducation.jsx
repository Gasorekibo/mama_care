import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import Modal from "../../components/shared/Modal";
import { useState } from "react";
import AllEducationCard from "../../components/shared/AllEducationCard";

function AllEducation() {
  const { user } = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = user?.role === "PREGNANT_WOMAN";

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddNew() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div>
      {isAdmin && (
        <button
          onClick={handleAddNew}
          type="button"
          className="text-white lg:absolute md:right-14 md:top-16 md:my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <MdOutlinePlaylistAddCircle className="text-lg me-2" />
          Add new
        </button>
      )}
      <Modal
        modelId="authentication-modal"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 md:p-12">
        <AllEducationCard
          videoUrl="https://youtu.be/18it47NCQl4?si=Vy-3aoy1LRlqK0Rx"
          title="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
          content="A utility-first CSS framework for rapidly building custom designs."
          type="Tailwind CSS"
          recommended="Recommended for beginners"
        />
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-purple-500">
                Heroicons
              </span>
              Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                A set of 450+ free MIT-licensed SVG icons. Available as basic
                SVG icons and via first-party React and Vue libraries.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href=""
            >
              Learn more
              <span className="sr-only">
                , Beautiful hand-crafted SVG icons, by the makers of Tailwind
                CSS.
              </span>
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
          <img
            src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width="1216"
            height="640"
          />
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-cyan-500">
                Hero Patterns
              </span>
              Seamless SVG background patterns by the makers of Tailwind CSS.
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>
                A collection of over 100 free MIT-licensed high-quality SVG
                patterns for you to use in your web projects.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href=""
            >
              Learn more
              <span className="sr-only">
                , Seamless SVG background patterns by the makers of Tailwind
                CSS.
              </span>
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
          <img
            src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width="1216"
            height="640"
          />
        </li>
      </div>
    </div>
  );
}

export default AllEducation;
