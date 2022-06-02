/* eslint-disable no-restricted-imports */
import { nanoid } from 'nanoid/non-secure'

/**
 * Generates a random unique ID. We're using non-secure because it's faster and
 * we don't need security for our use cases.
 * https://github.com/ai/nanoid#non-secure
 *
 * @param {String} [prefix] An optional prefix string.
 * @return {String} a random unique ID string.
 */
const uniqueId = (prefix?: string): string =>
  prefix ? `${prefix}-${nanoid()}` : nanoid()

export default uniqueId
