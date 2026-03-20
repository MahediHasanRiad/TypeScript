/**
 *  : → lose precision
 *  satisfies → keep precision
 */

type user = {
  name: string
}

const User = {
  name: 'riad',

} satisfies user  // check type user value includes or not, if yes, then ok

// another way

type user2 = {
  name: string
}

const User2: user2 = {
  name: 'riad',
}


/******************************************************************************************** */
/**
 * if you assign a new variable then you can add extra field
 */

const user2 = {
  name: 'tamim',
  age: 15
}

const brother = user2 satisfies user  

/**
 * extect single type field from big type object
 */

type person = {
  name: string,
  age: number,
  address: {
    street: string,
    road: string
  },
  skills: []
}

type address = person['address']