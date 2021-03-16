// 魔改版
const doc = document
// 直接选择
const log = (...args) => console.log(...args)
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) =>
  Array.prototype.slice.call(document.querySelectorAll(selector))
// 带有主体的选择
Element.prototype.$ = Element.prototype.querySelector
// Document.prototype.$$ = Document.prototype.querySelectorAll
Element.prototype.$$ = function (selector) {
  return Array.prototype.slice.call(this.querySelectorAll(selector))
}

// 添加和移除 事件
EventTarget.prototype.on = EventTarget.prototype.addEventListener
EventTarget.prototype.off = EventTarget.prototype.removeEventListener
// Element // get return 具体数值 // set return this // 做连写
Element.prototype.attrs = function () {
  let l = arguments.length
  if (l === 0) {
    return
  } else if (l === 1) {
    let a0 = arguments[0]
    if (typeof a0 === 'string') {
      return this.getAttribute(arguments[0])
    } else if (Object.prototype.toString.call(a0) === '[object Object]') {
      for (let attr in a0) {
        this.setAttribute(attr, a0[attr])
      }
    }
  } else if (l === 2) {
    this.setAttribute(arguments[0], arguments[1])
    return this
  }
}
Element.prototype.classes = function () {
  let l = arguments.length
  if (l === 0) {
    return this.classList
  } else {
    let args = Array.prototype.slice.call(arguments)
    let list = this.classList,
      ll = list.length
    for (let j = 0; j < ll; j++) {
      let c = list[j]
      if (!args.includes(c)) {
        list.remove(c)
      }
    }
    for (let i = 0; i < l; i++) {
      let a = args[i]
      if (!list.contains(a)) {
        list.add(a)
      }
    }
    return this
  }
}
Element.prototype.styles = function () {
  let l = arguments.length
  if (l === 0) {
    return window.getComputedStyle(this)
  } else if (l === 1) {
    let a0 = arguments[0]
    if (typeof a0 === 'string') {
      return window.getComputedStyle(this)[a0]
    } else if (
      Object.prototype.toString.call(arguments[0]) === '[object Object]'
    ) {
      for (let prop in arguments[0]) {
        this.style[prop] = arguments[0][prop]
      }
      return this
    }
  } else if (l === 2) {
    this.style[arguments[0]] = arguments[1]
    return this
  }
}

// Document 增删改查
Document.prototype.create = function (tag, type) {
  if (!type) {
    return document.createElement(tag)
  } else if (type.toLowerCase() === 'svg') {
    let svgNameSpace = 'http://www.w3.org/2000/svg'
    return document.createElementNS(svgNameSpace, tag)
  }
}

// Node
Node.prototype.appends = function () {
  let l = arguments.length
  if (l === 0) {
    return this
  } else if (l === 1) {
    // 如果是数组
    if (Array.isArray(arguments[0])) {
      let a0 = arguments[0]
      // 进行一个 排序
      // 如果没有备注则为 自动排序
      // 如果有序号,则按照序号进行排序 1,2,3,4, -1,-2,-3
      // 优先正序,然后倒序
      let len = this.children.length
      let total = len + a0.length
      aa0 = a0
        .map((a, i) => {
          if (a instanceof Node) {
            return { node: a, index: 'last' }
            // }else if()
          } else if (is(a, 'Array')) {
            if (validNodeIndex(a[0], a[1])) {
              let o = {}
              o.node = a[0]
              let res = getIndexFlag(total, a[1])
              o.index = res.index
              o.flag = res.flag

              return o
            }
          } else if (is(a, 'Object')) {
            if (validNodeIndex(a.node, a.index)) {
              let res = getIndexFlag(total, a.index)
              a.index = res.index
              a.flag = res.flag
              return a
            }
          }
        })
        .filter((a) => a)

      let lastArr = aa0.filter((a) => a.index === 'last')
      aa0 = aa0
        .filter((a) => a.index !== 'last')
        .sort((a, b) => {
          if (a.index === b.index) {
            return b.flag - a.flag
          } else {
            return a.index - b.index
          }
        })
      aa0.forEach((aa) => {
        resolveIndex(this, aa.node, aa.index)
      })
      lastArr.forEach((last) => {
        resolveIndex(this, last.node, last.index)
      })
    }
    return this
  } else if (l === 2) {
    let a0 = arguments[0],
      a1 = arguments[1]
    if (validNodeIndex(a0, a1)) {
      resolveIndex(this, a0, a1)
    }
  }
  return this
}

Node.prototype.appendTo = function (parent, index) {
  let len = parent.children.length
  if (index === undefined || index === 'last' || index === len - 1) {
    parent.appendChild(this)
  }
  if (!isNaN(index)) {
    if (index > 0) {
      parent.insertBefore(this, parent.children[index - 1])
    } else if (index < 0) {
      parent.insertBefore(this, parent.children[len + index])
    } else if (index === 0) {
      parent.insertBefore(this, parent.children[0])
    }
  }
  return this
}
// 根据序号判断使用 appendChild 还是 insertBofore
function resolveIndex(parent, node, index) {
  let l = parent.children.length
  if (index === 'last' || index === l - 1) {
    parent.appendChild(node)
  } else {
    parent.insertBefore(node, parent.children[index])
  }
}
// 根据 index 获取,真正的 index 和 flag
function getIndexFlag(total, index) {
  if (index > 0) {
    return { index: index - 1, flag: 1 }
  } else if (index < 0) {
    return { index: total + index + 1, flag: -1 }
  }
}

// 判断是否符合 要求
function validNodeIndex(node, index) {
  return node instanceof Node && !isNaN(index)
}

function findPrototype(obj, prop) {
  let __proto__ = obj.__proto__
  while (__proto__) {
    if (__proto__.hasOwnProperty(prop)) {
      return __proto__.constructor.name
    }
    __proto__ = __proto__.__proto__
  }
}

function is(obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type
}
