function check(params) {
  return new Promise((resolve, reject) => {
    if (params === 1) resolve(1)
    else reject('err')
  })
}
check(2).then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
