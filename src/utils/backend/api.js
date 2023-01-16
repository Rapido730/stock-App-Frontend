import axios from "axios";
import { backend_url } from "../../assests/backend";

export const postMethod = async (data, link, config = {}) => {
  try {
    const res = await axios.post(backend_url + link, data, config);
    return res;
  } catch (error) {
    return null;
  }
};

export const getMethod = async (link, data = {}, config = {}) => {
  try {
    const res = await axios.get(backend_url + link, data, config);
    return res;
  } catch (error) {
    return error;
  }
};

export const patchMethod = async (data, link, config = {}) => {
  try {
    const res = await axios.patch(backend_url + link, data, config);
    return res;
  } catch (error) {
    return null;
  }
};

export const deleteMethod = async (link, config = {}) => {
  try {
    const res = await axios.delete(backend_url + link, config);
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteTaskMethod = async (AuthToken, description) => {
  const Authorization = "Bearer " + AuthToken;
  const config = {
    headers: {
      Authorization: Authorization,
    },
  };

  const res = await deleteMethod(`/tasks/delete/${description}`, config);
  return res;
};

export const SignOutUser = () => {
  postMethod({}, "/users/logout");
};
