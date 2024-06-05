import { loginRes } from "@/types/loginRes";
import cookieDate from "@/util/cookieDate";

const loginRequest = async (data: {
  identity: string;
  password: string;
}): Promise<loginRes> => {
  try {
    const response = await fetch(
      "https://primecrm-back.liara.run/api/collections/users/auth-with-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.status === 400) {
      throw new Error("Username or password is incorrect");
    }
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    const result: loginRes = await response.json();
    document.cookie = `token=${result.token}; expires=${cookieDate()}; `;
    document.cookie = `isAdmin=${result.record.isAdmin}; expires=${cookieDate()}; `;
    document.cookie = `userId=${result.record.id}; expires=${cookieDate()}; `;

    return result;
  } catch (error) {
    throw error as Error;
  }
};

export default loginRequest;
