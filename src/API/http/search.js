import { client } from '../config';

export function search(type, searchBy, value) {
  return client()
    .get(`/${type}/?${searchBy}=${value}`)
    .then((response) => {
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
