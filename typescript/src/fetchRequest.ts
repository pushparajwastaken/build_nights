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
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/6"
    );
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data: Todo = await response.json();
    console.log(data);
  } catch (error: any) {}
};
