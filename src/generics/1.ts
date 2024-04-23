import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPost: Promise<Post> = fetchData<Post>(
  "https://jsonplaceholder.typicode.com/posts/1"
);
fetchPost
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
