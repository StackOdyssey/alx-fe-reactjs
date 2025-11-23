import axios from "axios";


export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};


export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  const users = response.data.items;


  const detailedUsers = await Promise.all(
    users.map(async (u) => {
      const userDetails = await axios.get(`https://api.github.com/users/${u.login}`);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
