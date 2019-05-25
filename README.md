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

# ES6-8 + Stage 1,3

- [블록 영역](#블록-영역)
- [템플릿 리터럴](#템플릿-리터럴)
- [화살표 함수 & this](#화살표-함수--this)
- [기본 매개변수](#기본-매개변수)
- [나머지 매개변수](#나머지-매개변수)
- [전개(spread) 문법](#전개spread-문법)
- [String 인스턴스 메서드](#String-인스턴스-메서드)
- [Array 인스턴스 메서드](#Array-인스턴스-메서드)
- [Object 클래스 메서드](#Object-클래스-메서드)
- [클래스 문법](#클래스-문법)
- [구조 분해 할당](#구조-분해-할당)
- [for...of](#for...of)
- [모듈](#모듈)
- [계산된 속성](#계산된-속성)
- [향상된 객체 표기 법](#향상된-객체-표기-법)
- [후행 쉼표](#후행-쉼표)
- [비동기 함수](#비동기-함수)
- [체이닝 옵션](#체이닝-옵션)

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

- [Object.assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Array.from](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

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
// Object.assign, 나머지 매개변수 활용
function combine(combined, ...args) {
  args.forEach(o => Object.assign(combined, o))
  return combined
}

// Array.from 활용
function combine() {
  const args = Array.from(arguments)
  const combined = args.shift()
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
// 후보 (stage 3: candidate)
// React, React Native에서 사용할 수 있음
const newState = {...state, newContent: 'react router'}

```

## String 인스턴스 메서드

- [String.prototype.includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [String.prototype.startsWith](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [String.prototype.endsWith](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [String.prototype.repeat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

```js
// ES6

const poem = {
  snow: `
    지난밤에 눈이 소오복히 왔네
    지붕이랑 길이랑 밭이랑 추워한다고
    덮어주는 이불인가봐
    그러기에 추운 겨울에만 내리지
  `
}

let poet

if (poem.snow.includes('눈이 소오복히 왔네')) {
  console.log('이 시는 "윤동주" 작가님의 "눈" 입니다.')
  poet = '윤동주'
}

if (poem.snow.trim().startsWith('지난밤에')) {
  console.log('이 시는 "지난밤에"라는 과거 형으로 시작합니다.')
}

if (poem.snow.trim().endsWith('겨울에만 내리지')) {
  console.log('이 시는 "겨울에만 내리지"로 끝맺습니다.')
}

if(poet === '윤동주') {
  console.log(`윤동주 시인의 글을 3번 되내어 읽어 보겠습니다. \n${poem.snow.repeat(3)}`)
}
```

## Array 인스턴스 메서드

- [Array.prototype.find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.prototype.findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Array.prototype.includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
// ES6
const reactFramework = 'react redux react-native react-navigation'.split(' ')

reactFramework.find(item => item === 'redux')
reactFramework.findIndex(item => item === 'react-native')

// ES7
let item = 'react-navigation'
if (reactFramework.includes(item)) {
  console.info(`reactFramework 배열 안에는 ${item} 아이템이 포함되어 있습니다.`)
}
```

## Object 클래스 메서드

- [Object.entries](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Object.keys](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// ES6
const state = {
  newContent: 'react native',
  contents: ['react', 'redux', 'react router'],
}

Object.entries(state)
Object.keys(state)
Object.values(state)

for (let [key, value] of Object.entries(state)) {
  console.log(key)
  console.log(value)
}
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

## 후행 쉼표

```js
// ES5
// 후행 쉼표 없음

// ----------------------------------------

// ES6
const trailingComma = (instructor, message, ) =>
  `${instructor}! ${message} 하자!!`

trailingComma(
  '야무',
  '후회없는 강의',
)
```

## 비동기 함수

```js
// ES5
// Promise, 비동기 함수 없음
function usingXMLHttpRequest(api) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', api)
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      var jsonStringToObject = JSON.parse(xhr.response)
      var data = jsonStringToObject.data
      for (var i=0, l=data.length; i<l; ++i) {
        var item = data[i]
        console.log(item)
      }
    }
  }
  xhr.send()
}

usingXMLHttpRequest('//api.myjson.com/bins/htzry')

// ------------------------------------------------

// ES6
// Promise 활용
const usingPromise = api => {
  fetch(api)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      for(let item of data) {
        console.log(item)
      }
    })
    .catch(error => console.error(error.message))
}

usingPromise('//api.myjson.com/bins/htzry')

// ------------------------------------------------

// ES8
// 비동기 함수(식) 활용
const usingAsync = async (api) => {
  try {
    const response = await fetch(api)
    const json = await response.json()
    for(let item of json.data) {
      console.log(item)
    }
  } catch(error) {
    console.log(error.message)
  }
}

usingAsync('//api.myjson.com/bins/htzry')

// 비동기 함수(선언)
// async function usingAsync() {
//   ...
// }
```

## 체이닝 옵션

```js
// ES5
var c = a == null ? undefined : a.b
var y = a == null ? undefined : a[x]
var z = a == null ? undefined : a.b()
var v = a == null ? undefined : a()

// ------------------------------------------------

// 체이닝 옵션
// 제안 (stage 1: proposal)
let c = a?.b
let y = a?.[x]
let z = a?.b()
let v = a?.()
```

