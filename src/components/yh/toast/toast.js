import { ref } from 'vue'
import { isObj } from '../common/utils'
const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#yh-toast',
}
let queue = []
let currentOptions = Object.assign({}, defaultOptions)

const parseOptions = (message) => {
  return isObj(message) ? message : { message }
}

const getContext = () => {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

const yh_toast = ref(null)
console.log(yh_toast, 'yh_toast==')
const Toast = (toastOptions) => {
  const options = Object.assign(
    Object.assign({}, currentOptions),
    parseOptions(toastOptions)
  )
  const context = options.context || getContext()
  const toast = context.selectComponent(options.selector)
  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确')
    return
  }

  console.log(options.context, 234)

  delete options.context
  delete options.selector
  toast.clear = () => {
    toast.setData({ show: false })
    if (options.onClose) {
      options.onClose()
    }
  }
  console.log(toast, 'toast=====')
  queue.push(toast)

  toast.data = {
    ...toast.data,
    ...options,
  }

  clearTimeout(toast.timer)
  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
      queue = queue.filter((item) => item !== toast)
    }, options.duration)
  }
  return toast
}

const createMethod = (type) => (options) =>
  Toast(Object.assign({ type }, parseOptions(options)))
Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.clear = () => {
  queue.forEach((toast) => {
    toast.clear()
  })
  queue = []
}
Toast.setDefaultOptions = (options) => {
  Object.assign(currentOptions, options)
}
Toast.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, defaultOptions)
}
export default Toast
