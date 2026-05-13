import axiosClient from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { CreateUserPayload } from "@/features/users/types/users";

export const userService = {

    getUsers : async() => {
        const response = await axiosClient.get(ENDPOINTS.USERS);
        return response?.data;
    },

    createUser: async (data: CreateUserPayload) => {
        /* axios post API call example 
        const response = await axios({
            method: 'post',
            url: '/user/12345',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone',
            },
        });
        const result = response.data;
        */
        const response = await axiosClient.post(
            ENDPOINTS.USERS,
            data
        );
        return response?.data;
    },

    // shorter version of above function

    // getUsers: () => axiosClient.get(ENDPOINTS.USERS),

    //getUser: (id: string) => axiosClient.get(`${ENDPOINTS.USER}/${id}`),

    //createUser: (data: any) => axiosClient.post(ENDPOINTS.USERS, data),

    updateUser: (id: string, data: any) => axiosClient.put(`${ENDPOINTS.USER}/${id}`, data),

    deleteUser: (id: string) => axiosClient.delete(`${ENDPOINTS.USER}/${id}`),

    login: (credentials: any) => axiosClient.post(ENDPOINTS.LOGIN, credentials),

}




/*
// Longer version of userService with async/await and response data extraction
export const userService = {
  getUsers: async () => {
    const response = await axiosClient.get(ENDPOINTS.USERS);
    return response.data;
  },

  getUser: async (id: string) => {
    const response = await axiosClient.get(
      `${ENDPOINTS.USERS}/${id}`
    );

    return response.data;
  },

  createUser: async (data: CreateUserPayload) => {
    const response = await axiosClient.post(
      ENDPOINTS.USERS,
      data
    );

    return response.data;
  },

  updateUser: async (
    id: string,
    data: Partial<CreateUserPayload>
  ) => {
    const response = await axiosClient.put(
      `${ENDPOINTS.USERS}/${id}`,
      data
    );

    return response.data;
  },

  deleteUser: async (id: string) => {
    const response = await axiosClient.delete(
      `${ENDPOINTS.USERS}/${id}`
    );

    return response.data;
  },
};


*/