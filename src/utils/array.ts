type TMapLength = (
  _length: number | string,
  _callback: (_item: any, _index: number) => any,
) => any[]
/**
 * Map over an array of a given length. This is useful when you need to iterate
 * based on specific quantity (as opposed to mutating the contents of an
 * already-populated array).
 * @param {Number} length the number of times the map should iterate
 * @param {Function} the callback function to use for the map operation
 * @return {Array} an array of the provided length containing items mutated
 *   by the callback function.
 */
const mapLength: TMapLength = (length, callback) =>
  Number.isInteger(length) && length > 0
    ? Array.from(Array(length).keys()).map(callback)
    : []

type TIsIndexInBounds = (_array: any[], _index: number) => boolean
/**
 * Check whether an index is within the bounds of an array
 * @param {Array} array The array to check
 * @param {Number} index The index to check
 * @return {Boolean} True when the index is in bounds
 */
const isIndexInBounds: TIsIndexInBounds = (array, index) =>
  index >= 0 && index <= array.length - 1

type TFn = () => void | any
type TMoveItem = (
  _array: any[] | null | TFn,
  _fromIndex: number,
  _toIndex: number,
) => any[] | never
/**
 * Move an array item from one index to another (non-mutative)
 * @param {Array} array The array containing the item to be moved
 * @param {Number} fromIndex The index of the item to be moved
 * @param {Number} toIndex The index to which the item should be moved
 * @return {Array} A new array with the item moved
 */
const moveItem: TMoveItem = (array, fromIndex, toIndex) => {
  if (!array) {
    throw new Error('no array provided')
  }
  if (!Array.isArray(array)) {
    throw new Error('provided array does not have a type of `Array`')
  }
  if (!array.length) {
    throw new Error('provided array is empty')
  }
  if (!isIndexInBounds(array, fromIndex)) {
    throw new Error('fromIndex is out of bounds')
  }
  if (!isIndexInBounds(array, toIndex)) {
    throw new Error('toIndex is out of bounds')
  }

  const newArray = [...array]
  const itemToMove = newArray[fromIndex]
  newArray.splice(fromIndex, 1)
  newArray.splice(toIndex, 0, itemToMove)
  return newArray
}

type TToSentence = (_items: any[] | null) => string
/**
 * Convert an array of items to a sentence
 * @param {Array} items The array of items
 * @return {String} The items as a sentence
 * ['Moe'] -> 'Moe'
 * ['Moe', 'Larry'] -> 'Moe and Larry'
 * ['Moe, 'Larry', 'Curly'] -> 'Moe, Larry, and Curly'
 */
const toSentence: TToSentence = (items) => {
  if (!Array.isArray(items)) {
    return ''
  }

  switch (items.length) {
    case 0:
      return ''
    case 1:
      return String(items)
    /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
    case 2:
      return items.join(' and ')
    default:
      return `${items.slice(0, -1).join(', ')}, and ${items.slice(-1)}`
  }
}

export { mapLength, moveItem, toSentence }
