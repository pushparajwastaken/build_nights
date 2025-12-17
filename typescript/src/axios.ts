import axios from "axios";
import type { AxiosResponse } from "axios";
interface Todo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchphrase: string;
    bs: string;
  };
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/users/6"
    );
    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};
