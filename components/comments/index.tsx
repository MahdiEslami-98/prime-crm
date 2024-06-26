import { commentRes } from "@/types/getCommentsByPostIdRes";
import dateFormater from "@/util/dateFormat";
import Button from "../button";
import deleteComment from "@/api/deleteComment";

const Comments = ({
  comments,
  setComment,
  ad,
}: {
  comments: commentRes;
  setComment: Function;
  ad: string;
}) => {
  const handleDeleteComment = (id: string) => {
    deleteComment(id);
    setComment((prev: commentRes) => ({
      ...prev,
      items: prev.items?.filter((item) => item.id !== id),
    }));
  };
  return (
    <div className="w-full pt-6">
      <div className="flex flex-col gap-y-4">
        {comments?.items && comments?.items?.length > 0 ? (
          comments?.items?.map((comment) => (
            <div
              key={comment.id}
              className="rounded-[20px] bg-gradient-to-r from-primary-02 to-primary-01 p-0.5"
            >
              <div className="flex w-full flex-col gap-y-4 rounded-[20px] bg-[#f9f9f9] px-12 py-6 dark:bg-[#808080]">
                <div className="flex justify-between text-primary-03">
                  <p className="font-jost text-head6 font-semibold">
                    {comment.fullname}
                  </p>
                  <div className="flex flex-col-reverse items-center gap-x-2 sm:flex-row">
                    {ad === "true" && (
                      <Button
                        color="bg-primary-03"
                        text="Delete"
                        className="px-2 text-white"
                        onClick={() => handleDeleteComment(comment.id)}
                      />
                    )}
                    <p className="font-open-sans text-[#888] dark:text-[#ccc]">
                      {dateFormater(comment.created)}
                    </p>
                  </div>
                </div>
                <p className="font-open-sans">{comment.message}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex w-full flex-col gap-y-4 rounded-[20px] border border-[#9d9d9d] bg-[#fafafa] px-12 py-6 dark:bg-[#999]">
            <p className="font-jost text-head6 font-semibold">No comments</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
