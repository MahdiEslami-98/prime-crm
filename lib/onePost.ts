import pb from "./pocketBase";

const onePost = async (id: string) => {
  try {
    const response = await pb.collection("posts").getOne(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default onePost;
