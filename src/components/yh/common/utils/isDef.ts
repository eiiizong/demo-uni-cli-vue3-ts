/**
 *
 * @param value
 * @returns
 */
const isDef = (value: string | number) => {
  return value !== undefined && value !== null
}

export { isDef }
