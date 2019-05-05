# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

### 🤐 학습 자료

React 애플리케이션 학습 자료를 다운로드 받아 실습을 진행합니다.

➪ [학습 자료](https://github.com/yamoo9/react-native/archive/react-03-ex.zip) 다운로드

<br>

## Movies 컴포넌트

데이터베이스에 영화 정보가 없을 경우, 사용자에게 정보를 알리도록 렌더링되는 코드를 작성합니다.

### 조건부 렌더링

[Bootstrap → Alerts](https://getbootstrap.com/docs/4.3/components/alerts/) 가이드를 참고하여 사용자에게 알림 정보를 제공해봅니다.

```jsx
render() {
  const { length: count } = this.state.movies

  // 데이터베이스에 영화 정보가 없는 경우 렌더링
  if (count === 0) {
    return <p className="alert alert-warning" role="alert">데이터베이스에 영화 정보가 존재하지 않습니다.</p>
  }
  // 데이터베이스에 영화 정보가 있는 경우 렌더링
  else {
    return (
      <React.Fragment>
        <p className="alert alert-primary" role="alert">데이터베이스에 존재하는 영화 정보는 <b>{count}</b>개 입니다.</p>
        <table className="table"></table>
      </React.Fragment>
    )
  }
}
```

### App.css 업데이트

알림 메시지가 화면에 출력될 때 공간이 브라우저 뷰포트 상단에 붙지 않도록 스타일을 작성합니다.

```css
body {
  padding-top: 2rem;
}
```