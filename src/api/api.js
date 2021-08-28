import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4567';

export async function fetchContacts() {
  const response = await axios.get(`contacts`);
  return response.data;
}

export async function postContact(newContact) {
  const response = await axios.post(`contacts`, newContact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}
