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

그리고 알림 메시지가 화면에 출력될 때 공간이 브라우저 뷰포트 상단에 붙지 않도록 `App.css` 스타일을 작성합니다.

```css
body {
  padding-top: 2rem;
}
```

### Like 버튼

테이블에 사용자가 '좋아요(Like)'를 선택할 수 있는 아이콘 버튼을 추가해봅니다.

#### React FontAwesome 모듈

아이콘을 버튼으로 프로젝트에 사용하기 위해 [React FontAwesome](https://github.com/FortAwesome/react-fontawesome)을 설치 합니다.
설치해야 할 모듈은 다음과 같습니다. (FontAwesome v5부터 사용법이 변경되었습니다.)

- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/react-fontawesome

**설치**

```sh
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome
```

**사용법**

`src/index.js` 파일을 열어 React FontAwesome 코어 라이브러리, 솔리드/레귤러 SVG 아이콘 모듈을 불러옵니다.
그리고 사용할 아이콘 모듈(`faHeart`, `farHeart`)을 불러와 라이브러리에 추가(add) 합니다.

```js
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faHeart, farHeart)
```

React FontAwesome을 사용할 컴포넌트 파일을 연 후, `FontAwesomeIcon` 모듈을 불러와 React 요소로 사용합니다.

| React 요소                                        | 아이콘 |
| ------------------------------------------------- | ------ |
| \<FontAwesomeIcon icon={**['fas', 'heart']**} /\> | ♥︎     |
| \<FontAwesomeIcon icon={**['far', 'heart']**} /\> | ♡      |

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyComponent extends Component {
  render() {
    return (
      <>
        {/* 솔리드 아이콘 (기본 값) */}
        <FontAwesome icon={['fas', 'heart']} />
        {/* 레귤러 아이콘 */}
        <FontAwesome icon={['far', 'heart']} />
      </>
    )
  }
}
```

#### LikeButton 컴포넌트

`src/components/common` 디렉토리 안에 `LikeButton.jsx` 파일을 추가합니다.

```jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeButton = props => {
  function likeClass() {
    return props.liked ? 'fas' : 'far'
  }
  return (
    <button type="button" className="btn btn-link" onClick={props.onToggleLike}>
      <FontAwesomeIcon icon={[likeClass(), 'heart']} />
    </button>
  )
}

export default LikeButton
```

`Movies.jsx` 파일에서 `LikeButton` 모듈을 불러와 추가합니다.

```jsx
import LikeButton from './common/LikeButton'
```

\<LikeButton /\> 요소를 작성하고 전달할 속성 값으로 `movie.like`를 설정합니다.

```jsx
<LikeButton liked={movie.like} />
```

#### LikeButton 이벤트 핸들링

\<LikeButton /\> 요소에 `onToggleLike` 커스텀 이벤트를 추가한 후, 핸들러를 연결합니다. (`movie` 객체 전달)

```jsx
<LikeButton
  liked={movie.like}
  onToggleLike={e => this.handleToggleLike(movie)}
/>
```

핸들러는 `movie` 객체를 전달 받아 `movies` 배열 데이터에서 해당 영화 정보를 찾아 `like` 속성 값을 토글 처리합니다.
마무리로 Movies 컴포넌트의 상태를 업데이트 합니다.

```jsx
handleToggleLike = movie => {
  const movies = this.state.movies.slice()
  const index = movies.indexOf(movie)
  movies[index].like = !movies[index].like
  this.setState({
    movies,
  })
}
```
