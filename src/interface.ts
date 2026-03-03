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
// this interface work, bcz it's basic type
class SasalaCahi implements teaRecipy {  
  water = 100;
  milk = 50;
} 


/**
 * type (2)
 */

// type CapSize= 'small' | 'medium' | 'large'  // { this custom type are not worked, you should create inter face}
interface CapSize {
  size: 'small' | 'medium' | 'large'
}

class Chai implements CapSize {
  size: "small" | "medium" | "large" = 'small'
}