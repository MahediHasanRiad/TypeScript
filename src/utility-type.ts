// ------------------------------------------------------------------- //
let people: {
  name: string;
  age: number;
};

people = {
  name: "riad",
  age: 10,
};

// another way


interface people2 {   // বড় object এর বেলায় interface use করা best
  name: string;
  age: number;
  bio: string;
}

let plc: people2;

plc = {
  name: "riad",
  age: 10,
  bio: "something",
};

// ------------------------------------------------------------------- //

type Tea = {
  name: string;
  price: number;
  indrediun: string[]; // array of string (in array, all value must be an string)
};

const banglaChai: Tea = {
  name: "bangla chai",
  price: 10,
  indrediun: ["masala", "adrak"],
};

// --------------------------------------------------------------------- //
// dack typing

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};

let bigCup = {
  size: "500ml",
  price: 100,
};

smallCup = bigCup; // smallCup এর Cup type এর requirement bigCup fullfil করছে, extra কিছু add হলেও আর error দিচ্ছে না

// ---------------------------------------------------------------------- //

type items = {
  name: string;
  age: number;
};

type address = {
  street: string;
  pin: number;
};

type order = {
  id: number;
  items: items[];   // type define before
  address: address;    // type define before
};

// ------------------------------------------------------------------------ //

// Partial use করার কারণে type এর value গুলো optional হয়ে যায়
// এটার একটা সমস্যা হল, এতে empty string ও pass করা যায়

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const masalaChai = (update: Partial<chai>) => {
  console.log("this is", update);
};

masalaChai({ name: "Bangla Chai" });

// ------------------------------------------------------------------------- //

/**
 * type এ যদি optional ও use করা হয়ে, কিন্তু function এ Required থাকে,
 * তাহলেও সব value pass করতেই হবে
 */

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

// -------------------------------------------------------------------- //

/**
 * Pick <> item => নির্দিষ্ট type এর মধ্যে থেকে কোন কোন value নিয়ে কাজ করতে চাই,
 * তা বলে দেওয়া ।
 */

type basicChai = {
  name: string;
  price: number;
  isHot: boolean;
  available: boolean;
};

const getChai = (item: Pick<basicChai, "name" | "isHot">) => {
  console.log(item);
};

// ------------------------------------------------------------------------ //

/**
 * Omit <typeName, 'item'> => Pick এর oposite, নির্দিষ্ট কোন item / items বাদ দিতে ব্যাবহার হয়
 * item ঠিকই থাকবে, but value pass করতে হবেনা
 */

type basicMasalaChai = {
  name: string;
  price: number;
  isHot: boolean;
  available: boolean;
};

type getMasalaChai = Omit<basicMasalaChai, "available">;

// ------------------------------------------------------------------------ //

/**
 * Record<key, value> => new object create করতে পারবে, but key তে যে যে item আছে, তার বাইরে না,
 * এবং value ও same হতে হবে
 */

type info = 'name' | 'number' | 'address'

const userInfo: Record<info, string[]> = {
  name: ['riad'],
  number: ['018565'],
  address: ['dhaka']
}

// another

const myInfo: Record<string | number, string | number | boolean | string[]> = {

}

// ------------------------------------------------------------------------ //

/**
 * NonNullable<type> => only store string, can not store Null / undefine
 */
type infor = string | null | undefined

type validInput = NonNullable<infor>


// -------------------------------------------------------------------------- //

/**
 * ReturnType<typeof functionName> => function type is, what they give 
 * when we don't know what kind of function data will we received
 */

function information(input: string) {
  return {id: 1, data: 'this', input}
}

type fetchData = ReturnType<typeof information>

// ---------------------------------------------------------------------------- //

/**
 * if function return a Promise, but we need resolved value
 * Awaited<>
 */

function infoPromise(): Promise<string> {
  return new Promise((resolved) => {
    setTimeout(() => resolved('data fetch'), 1000)
  })
}

type fetchDataReturn = Awaited<ReturnType<typeof infoPromise>>