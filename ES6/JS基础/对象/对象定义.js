const obj = {
  name: 'lisongwei'
}

Object.defineProperty(obj, 'name', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 'liaoyu'
})

console.log(obj.name)
obj.name = 'liaoyu'
console.log(obj.name)
