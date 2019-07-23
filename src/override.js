import { h, render } from 'preact'
import Countdown from './components/Countdown'

const elements = document.getElementsByClassName('_51x_')
const rightCol = elements[0]

const el = document.createElement('div')
el.classList.add('pagelet_canvas_nav_content')

chrome.storage.sync.get(['title', 'date'], function(x) {
  render(<Countdown {...x} />, el)
})

rightCol.prepend(el)
