# manys.js
( Small | Smart | Support | Simple | Short | Sheet | Special | Surprise ) JS libary for Demos

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


