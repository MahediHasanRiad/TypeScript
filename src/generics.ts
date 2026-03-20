/**
 * besically type define করে দেওয়া, কোন type এর value নিবে এবং return করবে
 */

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair<string, number>("riad", 20);
pair<number, object>(12, {});
pair({}, []);

/**
 * another use in APi
 */

interface ResApi<T> {
  status: number;
  data: T;
}

/**
 * in api call
 */

type user = {
  name: string;
  number: number;
  address: string;
};

type apiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchUser(): Promise<apiResponse<user>> {  
  const respose = await fetch("https://www.google.com");
  const data = await respose.json();

  return {
    data,
    status: respose.status,
    message: "",
  };
}

async function main(){
  const user = await fetchUser()
  console.log(user.data.name)
}