/**
 * fixed this 3 value, if anyone use "seat" variable, 
 * they must use from this 3 option
 */
const seat: 'windo' | 'middle' | 'alise' = "windo"

/**
 * another work on union
 * you can receive 2 datatypes
 */
const subscriber: String | Number = '1M' // '1M' / 100


/**
 * inherit another type
 */

type user = {
  name: string,
  age: number
}

type person = user & {
  address: string,
  mobile: number
}

const personDetails: person = {
  name: 'riad',
  address: 'xyz',
  age: 26,
  mobile: 1856265,
}

/**
 * role base permission
 */

type admin = {
  id: number,
  role: 'Admin',
  controll: string
}

type manager = {
  id: number,
  role: 'Manager'
}

type information = admin | manager

function compary(info: information){
  if(info.role === 'Admin'){
    console.log(`his role is ${info.controll}`)
  }
}