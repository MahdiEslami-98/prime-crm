import { addPostReq } from "@/types/addPostReq";
import { addPostRes } from "@/types/addPostRes";

const addPost = async (data: addPostReq): Promise<addPostRes> => {
  try {
    const response = await fetch(
      "https://primecrm-back.liara.run/api/collections/posts/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.status !== 200) {
      throw new Error("Failed to create post");
    }
    const result: addPostRes = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export default addPost;
