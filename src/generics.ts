/**
 * besically type define করে দেওয়া, কোন type এর value নিবে এবং return করবে
 */

function pair<A, B>(a: A, b:B): [A, B] {
  return [a, b]
}

pair('riad', 20)
pair(12, {})
pair({}, [])


/**
 * another use in APi
 */

interface ResApi<T> {
  status: number,
  data: T,
}