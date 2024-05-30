const addComment = async (data: commentReq) => {
  try {
    const response = await fetch(
      "https://primecrm-back.liara.run/api/collections/comments/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default addComment;
