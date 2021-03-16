# manys.js
( Small | Smart | Support | Simple | Short | Sheet | Special | Surprise ) JS libary for Demos
It is used to quickly write a demo,not a good choice for project . Enjoy it.

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

$ : document.querySelector
$$ : [...document.querySelectorAll]

```js
// before
const input = document.querySelector('input[type=text]')

// after
const input = $('input')

// before 
const cards = document.querySelectorAll('.cards')
Array.from(cards).forEach(card => card.style['border-radius']='3px')
// after
const cards = $$('.cards')
cards.forEach(card => card.style['border-radius']='3px')
```

element.$ : element.querySelector 
element.$$ : [...element.querySelectorAll]
```js
before
// .cards > .title > h1

// before
const title = document.querySelctor('.card').querySelector('h1').innerText

// after
const title = $('.card').$('h1').innerText

// .cards > p
// before 
const ps = document.querySelctor('.card').querySelctorAll(p)
;[...ps].forEach(p => p.style.color = '#444')

// after
const ps = $('.card').$$('p')
ps.forEach(p => p.style.color = '#444')
```
Add or Remove event like Jquery
```js
const clickHandler = (e) => {
  log('hi there...')
}
// before
document.addEventListener('click', clickHandler)

// after
doc.on('click',clickHandler)

// before
document.removeEventListener('click',clickHandler)

// after
doc.off('click',clickHandler)
```
Edit attribute classList and style like Jquery

Element.attrs
```js
const input = $('input')

// get
const type = input.attrs('type')

// set
input.attrs('type','text')

// set a lot of attrs one time
input.attrs({
  type:'range',
  max:10,
  min:1,
  step:1,
  value:1
})
```
Element.classes
```js
const card = $('.card')

// get 
const classList = card.classes() // -> small

// set
card.classes('active')  // -> active

// set a lot // 
card.classes('active border big') // -> active border big

// add remove toggle class dont change
card.classList.add('active')
card.classList.remove('active')
card.classList.toggle('active')
card.classList.contains('active')

// you can choice classes function as your need
```
Element.styles
```js
const card = $('.card')

// get
const styles = card.styles()

// set
card.styles('background-color','pink')

// set a log
// just like write css, but not quite the same. cssobject -> jsobject
card.styles({
  'background-color':'pink',
  'border-radius':'3px',
  'display':'flex'
})
```
Now you can write a longlong scope
```js
const card = $('.card').attrs('role','button').styles('color','#444').classes('active cur').$('.title')....
```
Element crud
creates : createElement
```js
// before
const button = document.createElement('button')
const svgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle')

// after
const button = doc.creates('button')
const svgCircle = doc.creates('circle','svg')
```
