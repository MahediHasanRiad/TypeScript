// type 1
const chaiType: string[] = ['adrak', 'alaicy']   

// type 2
const chaiCupSize: number[] = [3, 5, 8]   
const rating: Array<number> = [3.5, 4.3]  // alternative

const data: (string | number)[] = ['any']
const dataAlt: Array<string | number> = ['any']   // alternative

// type 3
type Chai = {
  name: string,
  isHot: boolean
}

const getChai: Chai[] = [
  {name: 'Adrak', isHot: true},
  {name: 'Alaicy', isHot: false},
]


// type 4

// 2 dymentional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]


// ********************** tuple ********************

let chaiTuple: [ string, number ]
chaiTuple = ['any', 1]

// another
let chaiAur: [ string, number, boolean? ]
chaiAur = ['riad', 12, true]



/****************** named tuple (preferd) *********************/

const shirt: [color: string, price: number] = ['blue', 1500]





/*******************   enum     */

enum cupSize {
  small,
  medium,
  large 
}

const size = cupSize.large


// another

/**
 * যদি কোন ১টার value দেওয়া থাকে তাহলে বাকি গুলো auto increment নিয়ে নেই
 */
enum Status {
  Pending = 100,
  Reject, // 101
  Completed // 102
}

const sts = Status.Completed



// another

/**
 * MASALA = 'masala'  => display তে 'masala' show করবে, এটা value
 */
enum ChaiType {
  MASALA = 'masala',
  ADRAK = 'adrak'
}

function makeChai(type: ChaiType){
  console.log(type)
}

makeChai(ChaiType.MASALA)