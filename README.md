# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

<br>

## React Native 앱

### jsx 확장자 설정

프로젝트 루트에 `metro.config.js` 파일을 생성한 후 resolver.sourceExts 설정에 'jsx'를 추가합니다.

```js
module.exports = {
  resolver: {
    sourceExts: ['json', 'js', 'jsx'],
  },
}
```

### Horizontal 스크롤 뷰

[ScrollView](https://facebook.github.io/react-native/docs/scrollview), [Dimensions](https://facebook.github.io/react-native/docs/dimensions) 컴포넌트를 활용해
수평 방향으로 나열된 콘텐츠를 스크롤 하는 간단한 앱을 만들어 봅니다.

```jsx
import React, { Component } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native'

const MessageBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MessageText = styled.Text`
  color: #fff;
  font-size: 30px;
`

export default class App extends Component {
  state = {
    greeting: [
      { text: '헬로!!!', color: '#25c892' },
      { text: '반가워!', color: '#212836' },
      { text: '행복하자!', color: '#1568e2' },
    ],
    screen: {
      width: 0,
      height: 0,
    },
  }

  componentDidMount() {
    // 화면 정보 구조 분해 할당
    // { fontScale: 1, height: 375, width: 812, scale: 3 }
    const { width, height } = Dimensions.get('screen')

    this.setState({
      screen: {
        width,
        height,
      },
    })

    // 화면 크기 변경(예: 회전) 이벤트 감지
    Dimensions.addEventListener('change', ({ window, screen }) => {
      this.setState({
        screen: {
          width: screen.width,
          height: screen.height,
        },
      })
    })
  }

  render() {
    const { width, height } = this.state.screen
    const isHorizontalDirection = width > height

    return (
      <ScrollView
        // 수평 방향으로 포함하는 콘텐츠를 레이아웃 합니다.
        // https://facebook.github.io/react-native/docs/scrollview#horizontal
        horizontal={!isHorizontalDirection}
        // 스크롤 할 때 화면 크기에 맞춰 스크롤 뷰가 정지합니다.
        // https://facebook.github.io/react-native/docs/scrollview#pagingenabled
        pagingEnabled>
        {this.state.greeting.map((g, i) => (
          <MessageBox
            key={i}
            style={{
              width: !isHorizontalDirection ? width : height,
              height: !isHorizontalDirection ? height : width,
              backgroundColor: g.color,
            }}>
            <MessageText>{g.text}</MessageText>
          </MessageBox>
        ))}
      </ScrollView>
    )
  }
}
```
