const signupRequest = async (reqBody: {
  username: string;
  password: string;
  passwordConfirm: string;
}) => {
  try {
    const response = await fetch(
      "https://primecrm-back.liara.run/api/collections/users/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      },
    );

    if (response.status === 400) {
      throw new Error("Failed to create record");
    }
    if (!response.ok) {
      throw new Error("Failed to signup");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error as Error;
  }
};

export default signupRequest;
