const getCommentByPostId = async (postId: string) => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/comments/records?filter=postId%3D%22${postId}%22`,
      { next: { tags: ["comment"] }, cache: "no-store" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCommentByPostId;
