# manys.js
( Small | Smart | Support | Simple | Short | Sheet | Special | Surprise ) JS libary for Demos
It is used to quickly write a demo,not a good choice for project . Enjoy it.
* Small : This library is very small.
* Support : Dom support libary.
* Simple : easy to use, to code.
* Short : attribute -> attrs , code less,get set more.
* Sheet : you can styles like css sheet
* Special : This is very special libary, Unlike most libraries, he doesn't follow best practices, but better fun.
* Surprise : Less code, more functions

## How to use

You can use it quickly by copying the following code, enjoy...
common version

```html
<script src="https://cdn.jsdelivr.net/gh/rockyx128/manys.js/manys.js"></script>
```
minify version

```html
<script src="https://cdn.jsdelivr.net/gh/rockyx128/manys.js/manys.min.js"></script>
```

## API

log : console.log
```js
// before
console.log(1,2,3)

// after
log(1,2,3)
```
doc : document

selectElement like Jquery

$ : document.querySelector -> Element
$$ : document.querySelectorAll -> Array Elements

```js
// before
let title = document.querySelector('.title')

// after
let title = $('.title')

// before 
let cards = document.querySelectorAll('.cards')
Array.from(cards).forEach(card => card.style['border-radius']='3px')
// after
let cards = $$('.card')
cards.forEach(card => card.style['color']='#f99f9f')
```

element.$ : element.querySelector -> Element
element.$$ : element.querySelectorAll -> Array Elements
```js
before
// .cards > .card-wrapper > .card

// before
let cards = document.querySelector('.cards').querySelectorAll('.card')
let innerTexts = [...cards].map(c=>c.innerText)

// after
let innerTexts = $('.cards').$$('.card').map(c=>c.innerText)

```
Add or Remove event like Jquery
```js
const clickHandler = (e) => {
  log('hi there...')
}
// before
document.addEventListener('click', clickHandler)

document.removeEventListener('click',clickHandler)

// after
doc.on('click',clickHandler)

doc.off('click',clickHandler)
```
Edit attribute classList and style like Jquery

Element.attrs
```js
let cardsContainer = $('.cards')

// get
let type = cardsContainer.attrs('type')
let class = cardsContainer.attrs('class')

// set
cardsContainer.attrs('type','diffenentCardsType')

// set a lot of attrs one time
cardsContainer.attrs({
  role:'cards',
  for:'cards',
  abc:'edf'
})
```
Element.classes
```js
let card1 = $('.cards .card')
// get 
let className = card1.classes() // -> card

// set
card1.classes('card','active')  // -> card active

// set a lot // 
card1.classes('card', 'active','cur') // -> active border big

// add remove toggle class dont change
card1.classList.add('active')
card1.classList.remove('active')
card1.classList.toggle('active')
card1.classList.contains('active')

// you can choice classes function as your need
```
Element.styles
```js
let card2 = $('.cards .card-wrapper:nth-child(2) .card')

// get
let styles = card2.styles()

// set
card2.styles('background-color','#fff4f0')

// set a log
// just like write css, but not quite the same. cssobject -> jsobject
card2.styles({
  'background-color':'#fefff0',
  'border-radius':'20px',
  'color':'#fba0df'
})
```
Now you can write a longlong scope
```js
let card3 = $('.cards .card-wrapper:nth-child(3) .card').attrs('role','button').styles('color','#444').classes('active','cur')
```
Element crud
create : createElement
```js
// before
let button = document.createElement('button')
let svgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle')

// after
let button = doc.create('button')
let svgCircle = doc.create('circle','svg')
```
Add Element to ParentElemnet
ParentElemnet.appends

```js
let cardsContainer = $('.cards')
let button = doc.create('button')

// add a lot box
cardsContainer.appends(button)

// add a lot box by index
wrapper.appends([
  {node:box1,index:1},
  {node:box3},
  {node:box5,index:-2},
  [box6,6],
  [box7,'last']
])

```
