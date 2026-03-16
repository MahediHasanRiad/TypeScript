/**
 * we should use interface in Class
 */
/**
 * type (1)
 */
type teaRecipy = {
  water: number,
  milk: number
}

// this type work, bcz it's basic type
class MasalaCahi implements teaRecipy {  
  water = 100;
  milk = 50;
} 


/**
 * type (2)
 */

type CapSize1= 'small' | 'medium' | 'large'   // { this custom type are not worked, you should create interface}
 
interface CapSize2 {
  size: 'small' | 'medium' | 'large'
}

class Chai implements CapSize2 {
  size: "small" | "medium" | "large" = 'small'
}


/**
 * interface
 */

interface discountCalculator {
  (price: number): number  // get value as a number, and return a number value
}

const apply50 : discountCalculator = (p) => p * 2.5


/**
 * another
 */

interface teaMachine {
  start(): void,    // void = does not return any thing
  stop(): void
}

const machine: teaMachine = {
  start(){
    console.log('start')
  },
  stop(){
    console.log('stop')
  }
}

/**
 * another
 */

interface ChaiRating {
  [flavour: string] : number  // name + value
}

const rating: ChaiRating = {
  'masala' : 10
}


/**
 * marge interface
 */

interface User {
  name: string
}

interface User {
  age: number
}

const u: User = {
  name: 'riad',
  age: 10
}

/**
 * marge interface
 */

interface a {
  name: string
}
interface b {
  age: number
}

interface c extends a, b {
  mobile: number
}