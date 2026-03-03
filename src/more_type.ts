type book = {
  name: string;
};

const bookString = '{"name": "riad"}';
const bookObject = JSON.parse(bookString) as book;  // string data কোন type এর হবে তা

console.log(bookObject);


// another (2)

const data:unknown = 'this is riad'
const strData: string = data as string  // data কি type এর হবে তা বলে দেওয়া


// another (3)

type role = 'admin' | 'manager' | 'superAdmin'

function redirectAccordingRole(value: role) {
  if(value === "admin"){
    return 'admin'
  }
  if(value === 'manager'){
    return 'manager'
  }
  value;    // অবশিষ্ট কোন value আছে কিনা, থাকলে তার মান এখানে বসবে
}