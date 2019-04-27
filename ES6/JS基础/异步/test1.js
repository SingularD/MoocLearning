class Promise {
  constructor(executor) {
    this.state = 'pending'

    this.value = undefined
    this.reason = undefined

    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.fulfilledCallbacks.forEach(fn => { fn() })
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectedCallbacks.forEach(fn => { fn() })
      }
    }

    try{
      executor(resolve, reject)
    }catch (e) {
      reject(e)
    }
  }

  _then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value)
    }
    if (this.state === 'rejected') {
      onRejected(this.reason)
    }
    if (this.state === 'pending') {
      this.fulfilledCallbacks.push(() => {onFulfilled(this.value)})
      this.rejectedCallbacks.push(() => {onRejected(this.reason)})
    }
  }
}

function tt(params) {
  return new Promise((resolve, reject) => {
    if (params === 1) {
      setTimeout(() => {resolve()}, 0)
    }
    else reject()
  })
}
tt(1)._then(() => {
  console.log(111)
  return tt(2)
}, () => {
  console.log(222)
  return tt(2)
})
