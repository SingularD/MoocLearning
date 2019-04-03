import './style/style.scss'
import {data} from './data.js'
import {PassageList} from './components/PassageList'

const $ = (selector, root = document) => {
  return root.querySelector(selector)
}
const list = new PassageList(data)
$('.main-left').appendChild(list.element)