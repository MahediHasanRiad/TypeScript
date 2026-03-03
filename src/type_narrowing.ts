/**
 * we can narrow down types
 */

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `this is ${kind}`; // এখানে kind. দিলে string এর property আসে
  }
  return `that was ${kind}`; // এখানে কিন্তু kind. দিলে string এর property আসেনা !
}

// best practice
function serveChai(msg?: String) {
  if (msg) {
    return `this is ${msg}`;
  }
  return `nothing`;
}

// another (2)

function orderChai(size: "small" | "medium" | "large" | Number) {
  if (size === "small") {
    return `make a small chai`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `make chai #${size}`;
}

// another  (3)
class localChai {
  serve() {
    return `this is local Chai`;
  }
}
class VIPchai {
  serve() {
    return `this is vip chai`;
  }
}
/**
 * method are same but class are different,
 * define method come from which class
 */
function serve(chai: localChai | VIPchai) {
  if (chai instanceof localChai) {
    return chai.serve();
  }
}

/**
 * we can create a type
 */

type chaiOrder = {
  type: string;
  suger?: number; // suger এর value আসতেও পারে, আবার নাও আসতে পারে
};

function isChaiOrder(obj: any): obj is chaiOrder {
  // obj টা chaiOrder type follow করবে, এখানে type, suger item ও পাওয়া যাবে
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.suger === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serve ${item.type}`; // suggest chaiOrder type property
  }
  return `this is ${item}`; // suggest string property
}

// another  (4)

type infoShape = {
  name: string;
  age: number;
  mobile: number;
};

const info: infoShape = {
  // we must follow the type for every property
  name: "riad",
  age: 26,
  mobile: 1518949131,
};

// another (5)

type masalaChai = { type: string; spicy: string };
type organicChai = { type: string; healthy: string };

function brew(order: masalaChai | organicChai) {
  // কারণ spicy শুধু masalaChai এর মদ্ধেই আছে
  if ("spicy" in order) {
    return `we get masalachai`;
  }
  return `we get organic chai`;
}

// another (6)

// unknow = ডাটা কি আসবে তা জানিনা, কিন্তু return করার সময় string এর array হিসেবে return হবে
function isStringArray(arr: unknown): arr is String[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
