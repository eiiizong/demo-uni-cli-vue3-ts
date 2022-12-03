import { isDef, isNumber } from './index'

const addUnit = (value) => {
  if (!isDef(value)) {
    return undefined
  }
  value = String(value)
  return isNumber(value) ? `${value}px` : value
}

export { addUnit }
