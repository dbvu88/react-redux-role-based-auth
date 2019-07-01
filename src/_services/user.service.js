import config from "config";
import { createAuthHeader } from "../_helpers";

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};
const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getAll = () => {
  const requestOptions = {
    method: "GET",
    headers: createAuthHeader()
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions).then(
    handleResponse
  );
};

export const userService = {
  login,
  logout,
  getAll
};
