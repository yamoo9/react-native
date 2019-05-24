# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

## Modern JavaScript

React(React Native 포함)는 기본적으로 모던 JavaScript(ECMAScript) 문법을 사용합니다.
본 과정의 목표인 React Native를 배우기에 앞서 기본 프로그래밍 언어인 JavaScript의 최신 문법을 공부해봅니다.

### ✏ 학습

[React, React Native에서 자주 사용되는 ES6+ 문법](https://yamoo9.github.io/react-native/guidebook/pre-js-env.html) 위주로 학습을 진행합니다.

#### 1. ES5 ➜ ES6 코드 변경

`helper.js`, `index.js` 파일을 열어 ES5 코드를 ES6+ 코드로 변경해봅니다.

```sh
ediya.ui/
 ├─ api/
 ├─ css/
 ├─ images/
 └─ js/
     ├─ helper.js
     └─ index.js
```

#### 2. ES6 코드 작성

`movieService.js`, `genreService.js` 파일을 열어 요구되는 로직을 ES6+ 코드로 작성해봅니다.

```sh
services/
 ├─ movieService.js
 └─ genreService.js
```

### 🤐 학습 자료

[es-next.zip](https://github.com/yamoo9/react-native/archive/es-next.zip) 다운로드

## 블록 영역

```js
// ES5
{
  var initState = 0

  var state = {
    newContent: '',
    contents: ['react', 'redux'],
  }
}

console.log('initState', initState) // 0
console.log('state', state) // {}

// ---------------------------------------

// ES6
{
  let initState = 0

  const state = {
    newContent: '',
    contents: ['react', 'redux'],
  }
}

// Uncaught ReferenceError: * is not defined
console.log('initState', initState)
console.log('state', state)
```

## 템플릿 리터럴

```js
// ES5
var message = ''
var contents = state.contents

for (var i=0, l=contents.length; i<l; ++i) {
  var content = contents[i]
  message += (i+1) + ': ' + content + ' '
}

console.log('message = ', message)
console.log('i = ', i) // 2

// ------------------------------------------

// ES6
let message = ''
const contents = state.contents

for (let i=0, l=contents.length; i<l; ++i) {
  let content = contents[i]
  message += `${i+1}: ${content} `
}

console.log(`message = ${message}`)
console.log(`i = ${i}`) // Uncaught ReferenceError: i is not defined
```

## 화살표 함수 & this

```js
// ES5
var square = function(x) {
  return x * x
}

function handleOnClick(e) {
  console.log('e.target', e.target)
  console.log('this', this)
}

document.addEventListener('click', handleOnClick)

// -----------------------------------------------

// ES6
const square = (x) => {
  return x * x
}

const square = x => {
  return x * x
}

const square = x => (
  x * x
)

const square = x => x * x

// 화상표 함수의 this
const handleOnClick = (e) => {
  console.log('e.target', e.target)
  console.log('this', this)
}
```

## 기본 매개변수

```js
// ES5
var el = function(selector, context) {
  context = context || document
  return context.querySelector(selector)
}

// ----------------------------------------

// ES6
const el = (selector, context=document) =>
  context.querySelector(selector)
```

## 나머지 매개변수

```js
// ES5
function combine() {
  var combined = arguments[0]
  for(var i=1, o; (o=arguments[i]); ++i) {
    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        combined[key] = o[key]
      }
    }
  }
  return combined
}

// -----------------------------------------

// ES6
function combine(combined, ...args) {
  args.forEach(o => Object.assign(combined, o))
  return combined
}
```

## 전개(spread) 문법

```js
// ES5
var forAll = ['react', 'redux']
var forNative = ['react-native', 'react-navigation']
var state = {
  newContent: '',
  contents: ['react', 'redux'],
}

// 배열 병합
var combineContents = forAll.concat(forNative)

// 객체 병합
var newState = combine(state, { newContent: 'react router' })

// -----------------------------------------------------------

// ES6
const forAll = ['react', 'redux']
const forNative = ['react-native', 'react-navigation']
const state = {
  newContent: '',
  contents: ['react', 'redux'],
}

// 배열 병합
const combineContents = [...forAll, ...forNative]

// 객체 병합
const newState = {...state, newContent: 'react router'}

```

## 클래스 문법

```js
// ES5
// class 문법 ✘

// 상속 유틸리티 함수
function inherit(SubClass, SuperClass) {
  combine(SubClass.prototype, SuperClass.prototype)
  SubClass.prototype.constructor = SubClass
}

// Root
function Root() {}
Root.prototype.initialize = function() {}

// App
function App(SuperClass) {
  'use strict'

  if (SuperClass) {
    SuperClass()
    inherit(this, SuperClass)
  }
}
App.version = '0.0.1'

var app = new App(Root)

// -------------------------------------------

// ES6
class Root {
  initialize() {}
}

class App extends Root {
  constructor() {
    super()
  }
  static version = '0.0.1'
}

const app = new App()
```

## 구조 분해 할당

```js
// ES5
var state = {
  newContent: 'react native',
  contents: ['react', 'redux', 'react router'],
}

var reactNative = state.newContent
var contents = state.contents
var redux = contents[1]
var reactRouter = contents[2]

// -------------------------------------------

// ES6
const state = {
  newContent: 'react native',
  contents: ['react', 'redux', 'react router'],
}

const { newContent: reactNative, contents } = state
const { contents, ...rest } = state

const [ , redux, reactRouter ] = contents
const [ react, ...reactFamilies ] = contents
```

## for...of

```js
// ES5
// for...of 없음
var state = {
  reactNative: 'react native',
  contents: ['react', 'redux', 'react router'],
}

state.contents.forEach(function(item,index){
  console.log(index, item)
})

// ----------------------------------------------------

// ES6
const state = {
  reactNative: 'react native',
  contents: ['react', 'redux', 'react router'],
}

// 아이템 출력
for (let item of state.contents) {
  console.log(item)
}
// 인덱스도 함께 출력
for (let [index, item] of state.contents.entries()) {
  console.log(index, item)
}
```

## 모듈

```js
// ES5
// 모듈 없음

// ----------------------------------------------------

// ES6
import React from 'react'
import React, { Component } from 'react'
import { render } from 'react-dom'
import * as utils as from './utils'
import App from './App'

export const combine = () => { ... }
export () => { ... }
export default () => { ... }
export * from './utils'
```

## 계산된 속성

```js
// ES5
// 계산된 속성 없음

// ----------------------------------------

// ES6
let key = 'unigue';

const o = {[key]: 90123}
console.log(o.unique) // 90123


let { [key]: one } = { unique: 'identity' }
console.log(one) // 'identity'
```

## 향상된 객체 표기 법

```js
// ES5
var state = {
  reactNative: 'react native',
  contents: ['react', 'redux', 'react router'],
}

var obj = {
  state: state,
  getContentByIndex: function(index) {
    return this.state.contents[index]
  }
}

// ----------------------------------------

// ES6
const state = {
  reactNative: 'react native',
  contents: ['react', 'redux', 'react router'],
}

const obj = {
  state,
  getContentByIndex(index) {
    return this.state.contents[index]
  },
  // 화살표 함수는 사용 ✘
  // this 참조가 객체가 아님
  usingArrowFn: () => {
    console.log(this) // 상위 객체 참조
  }
}
```
