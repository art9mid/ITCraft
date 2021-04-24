import { client } from '../config';

export function getUsers() {
  return client()
    .get('/users')
    .then((response) => {
      console.log(response);
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw response.data;
      }
    })
    .catch((error) => {
      throw error.response.data;
    });
}

export function getUserPosts(id) {
  return client()
    .get(`/posts/?userId=${id}`)
    .then((response) => {
      console.log(response);
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw response.data;
      }
    })
    .catch((error) => {
      throw error.response.data;
    });
}
