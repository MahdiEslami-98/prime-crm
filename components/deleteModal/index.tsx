import React from "react";
import Button from "../button";

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  deleteHandler,
  postId,
  setPostId,
}: {
  showDeleteModal: boolean;
  setShowDeleteModal: Function;
  deleteHandler: Function;
  postId: string;
  setPostId: Function;
}) => {
  return (
    <dialog open={showDeleteModal}>
      <div className="fixed left-0 top-0 z-30 h-full w-full bg-[rgba(0,0,0,0.6)]">
        <div className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 sm:w-[500px]">
          <div>
            <p className="font-jost text-head6 font-semibold">
              Are you sure you want to delete this post?
            </p>
          </div>
          <div className="mt-8 flex font-jost font-semibold">
            <Button
              text="Yes"
              color="bg-primary-04"
              onClick={() => {
                deleteHandler(postId);
                setShowDeleteModal(false);
              }}
              className="mr-2 w-16 py-3 "
            />
            <Button
              text="No"
              color="bg-primary-03"
              className="w-16 py-3 text-white"
              onClick={() => {
                setShowDeleteModal(false);
                setPostId("");
              }}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteModal;
