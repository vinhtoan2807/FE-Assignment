import axios from "axios";

const BASE_URL = "https://dev-api.lovicogroup.com/api/v1";

const getToken = () => {
  return "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNXQjE0Zk40WGpxWm5UWVdFdnN2bCJ9.eyJnaXZlbl9uYW1lIjoiTmd1ecOqbiIsImZhbWlseV9uYW1lIjoiTmd1eeG7hW4iLCJuaWNrbmFtZSI6ImtoYWluZ3V5ZW4xMjAzIiwibmFtZSI6Ik5ndXnDqm4gTmd1eeG7hW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTHpBMnRIZDZmMnJxT3ZQbkVGVG1PUFhURF9jMG5wcG1TUThfTmdfeVpBPXM5Ni1jIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyNC0wMi0yMFQwNjoyNDo0OS4zNTdaIiwiZW1haWwiOiJraGFpbmd1eWVuMTIwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9sb3ZpY28uanAuYXV0aDAuY29tLyIsImF1ZCI6ImpjbkwzRkVyNFdaMFNMOERTT25BUnRxaUwxY2lwMmM0IiwiaWF0IjoxNzA4NDEwMjkxLCJleHAiOjUzMDY0MTAyOTAsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2MjU0MzQwMDE0NjMzNTczNjAxIiwic2lkIjoiUVd4SXdMU1ZBSDQzWXZ5czZGb2R5U2taWUFsZG5EUUYiLCJub25jZSI6IlZTMVVlV05KU1hjNFltRTVVa1ZLVmpGelNsQXpUblYwUlV4WGJEZDJSSDQwUVZSZk1VazVTbkZDYkE9PSJ9.YTCoBaP5ce3vOj7widkgLM1YFMlsfGpuwysOIz0YxNBrdrBZ0xfFYEnrqPlCzC5Rdx-qDM_AmZobUX07poISO6BWQKysj6X3bGfhoMrG4DVAb26gzXvhg-4JuJbz3fuu9QWBlw3U7YVfCHV2aHG38iMwPzwafDIaM2_Npny1pJQQcHt5stxRBEcsAhYa-_aLFOrToqPpT8co_VVMzXC6d35L9RIuqvFlr3l6OQJs38kznjylBSHuLHjNhbY0992AaGMmhkF7hVwY1_EBPosqNNYp44DdkNn8frxuA3F67p1AIFL6D7_7stpY1nWm9EQLN0HRWfQrBSIL4AJChQee4A";
};

export const getNotifications = async (limit = 10, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/notifications`, {
      params: {
        limit: limit,
        page: page,
      },
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

export const markNotificationAsRead = async (notificationId) => {
  try {
    await axios.put(
      `${BASE_URL}/notifications/user-read-notification/${notificationId}`,
      null,
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

export const getUserAvatar = async (createdUserId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user-avatar/${createdUserId}/thumbnail`,
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );
    return response.config.url;
  } catch (error) {
    console.error("Error fetching user avatar:", error);
    throw error;
  }
};
