/**
 * 
 * @param value 
 * @returns 
 */
const isDef = (value:unknown) => {
  return value !== undefined && value !== null
}

export { isDef }
