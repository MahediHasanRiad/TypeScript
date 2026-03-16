
type baseChai = {
  teaLeaves: number
}

type extra = {
  masala: number
}

// add 2 types
type masalaChai = baseChai & extra

const chai: masalaChai = {
  teaLeaves: 1,
  masala: 1
}


// ------------- types ---------------

// (1)
// litteral type
type size = 'small' | 'medium' | 'large'  // এই ৩টা value এর মধ্যে থেকেই ১টা হবে

// (2)
type shirt = {
  needShirt: boolean
}
type pent = {
  needPent: boolean
}

type combo = shirt & pent    // এই ২টার value অবশ্যয় আসবে / দিতে হবে

const dress: combo = {
  needShirt: true,
  needPent: false
}

// (3)
type User = {
  name: string,
  bio?: string   // এই value আসতেও পারে, আবার নাও আসতে পারে 
}

const people: User = {
  name: 'riad'
}

// (4)
type config = {
  readonly AppName: string,   // 1st time value assign হওয়ার পর আর কেউ চাইলেও value change করতে পারবেনা
  version: number
}

const cnf: config = {
  AppName: 'RST',      // 1st time assigned value
  version: 1
}