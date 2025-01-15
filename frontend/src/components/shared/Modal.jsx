import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import { FaLink } from "react-icons/fa";
import { RiSkull2Fill } from "react-icons/ri";
import { CgSelectR } from "react-icons/cg";
import { MdOutlineTextSnippet } from "react-icons/md";
import * as yup from "yup";

export default function Modal({ modelId, isModalOpen, closeModal }) {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required"),
    type: yup.string().required("Type is required"),
    videoUrl: yup.string().required("Video URL is required"),
    recommendedForRiskLevel: yup
      .string()
      .required("Recommended for risk level is required"),
  });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      content: "",
      type: "",
      videoUrl: "",
      recommendedForRiskLevel: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        id={modelId}
        tabIndex="-1"
        aria-hidden={!isModalOpen}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 max-w-2xl w-full lg:max-w-4xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Education Content
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide={modelId}
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Title" />
                  </div>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        id="title"
                        type="title"
                        icon={HiMail}
                        placeholder="Nutrition for Perinatal"
                        color={errors.title?.message ? "failure" : "gray"}
                        helperText={errors.title?.message}
                      />
                    )}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="content" value="Content" />
                  </div>
                  <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        id="content"
                        type="content"
                        icon={MdOutlineTextSnippet}
                        placeholder="Lorem ipsum dolor sit amet."
                        color={errors.content?.message ? "failure" : "gray"}
                        helperText={errors.content?.message}
                        className="focus:border-black"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="type" value="Type" />
                  </div>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id="type"
                        type="type"
                        icon={CgSelectR}
                        placeholder="Nutrition"
                        color={errors.type?.message ? "failure" : "gray"}
                        helperText={errors.type?.message}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="videoUrl" value="Video Url" />
                  </div>
                  <Controller
                    name="videoUrl"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id="videoUrl"
                        type="videoUrl"
                        icon={FaLink}
                        placeholder="https://www.youtube.com/watch?v=n04NPtZI4QQ"
                        color={errors.videoUrl?.message ? "failure" : "gray"}
                        helperText={errors.videoUrl?.message}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="recommendedForRiskLevel"
                      value="Risk Level"
                    />
                  </div>
                  <Controller
                    name="recommendedForRiskLevel"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id="recommendedForRiskLevel"
                        type="recommendedForRiskLevel"
                        icon={RiSkull2Fill}
                        placeholder="MEDIUM"
                        color={
                          errors.recommendedForRiskLevel?.message
                            ? "failure"
                            : "gray"
                        }
                        helperText={errors.recommendedForRiskLevel?.message}
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 py-4">
                <Button
                  type="button"
                  color=" orange"
                  onClick={() => reset()}
                  className="bg-orange-400  hover:bg-orange-300 text-white"
                >
                  Clear
                </Button>
                <Button type="submit" color="blue">
                  Add New
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
}

Modal.propTypes = {
  modelId: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};