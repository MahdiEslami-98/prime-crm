import { addPostReq } from "@/types/addPostReq";
import { addPostRes } from "@/types/addPostRes";

const editPost = async (id: string, data: addPostReq): Promise<addPostRes> => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/posts/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.status !== 200) {
      throw new Error("Failed to edit post");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export default editPost;
