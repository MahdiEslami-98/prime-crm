import pb from "./pocketBase";

const getPosts = async () => {
  try {
    const response = await pb.collection("posts").getFullList({
      sort: "created",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getPosts;
