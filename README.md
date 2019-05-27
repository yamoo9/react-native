# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

<br>

## RN 프로젝트 Expo로 시작하기

### 설치

Expo CLI를 글로벌 설치합니다.

```sh
$ yarn global add expo-cli
# 또는 npm i -g expo-cli
```

### 구성 초기화

Expo CLI를 사용해 RN 프로젝트를 구성합니다.

```sh
$ expo init rn-using-expo
```

설치 과정에서 템플릿 선택을 물으면, 사용할 템플릿을 선택합니다.

```sh
# 템플릿 선택 (화살표 키 이용)
? Choose a template: (Use arrow keys)
  # 워크플로우 관리
  ----- Managed workflow -----
  # 빈 구성: 실행을 위한 최소 의존 모듈 설치 및 빈 루트 컴포넌트
❯ blank         minimal dependencies to run and an empty root component
  # 탭 메뉴: react-navigation을 사용한 탭 내비게이션 예제 제공
  tabs          several example screens and tabs using react-navigation
  # 베어 워크플로우
  ----- Bare workflow -----
  # 유니 모듈 사용을 위한 최소 설정
  bare-minimum  minimal setup for using unimodules
```

이어서 초기 설정 값 입력을 요청합니다. `name` 속성 값으로 '홈 화면에 표시될 앱 이름'을 입력합니다.

```sh
# 초기 설정 값 입력
? Please enter a few initial configuration values.
{
  "expo": {
    "name": "<홈 화면에 표시되는 앱 이름>",
    "slug": "rn-using-expo"
  }
}
```

초기 구성된 프로젝트 구조

```sh
.
├── App.js
├── app.json
├── assets/
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── package.json
├── yarn.lock
└── node_modules/
```

### 실행

초기 구성이 완료되면 프로젝트 디렉토리로 이동한 후, 프로젝트를 시작합니다.

```sh
$ cd rn-using-expo && yarn start
```

```sh
# Expo 개발 도구 실행
Expo DevTools is running at http://localhost:19002
# d 키를 누르면 개발 도구가 열리고, Shift + d 키를 누르면 항상 자동으로 개발 도구가 열림
Press d to open DevTools now, or shift-d to always open it automatically.
# 메트로 번들러 19001 포트에서 시작 됨
Starting Metro Bundler on port 19001.
# 터널 준비
Tunnel ready.

  exp://192.168.0.4:19000

  [QR CODE]

  # 변경 사항을 실시간으로 앱에 반영하도록 실행하려면, 다음 중 하나를 선택
  To run the app with live reloading, choose one of:
  # Expo 클라이언트에 로그인, Projects 탭에 자동으로 프로젝트가 표시
  • Sign in as @yamoo9 in Expo Client on Android or iOS. Your
    projects will automatically appear in the "Projects" tab.
  # Expo 앱(Android), 카메라 앱(iOS)로 QR 코드 스캔
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  # a 키를 누르면 AVD 실행, i 키를 누르면 iOS 시뮬레이터 구동
  • Press a for Android emulator, or i for iOS
    simulator.
  # e 키를 누르면 앱 링크를 이메일로 당신의 폰으로 전송
  • Press e to send a link to your phone with email.

# ? 키를 누르면 사용 가능한 모든 명령 리스트를 표시
Press ? to show a list of all available commands.
# 프로젝트 기록(log)이 아래 쪽에 표시. Ctrl+C를 누르면 프로젝트 종료.
Logs for your project will appear below. Press Ctrl+C to exit.
```

`?` 키를 누르면 다음 명령 목록이 화면에 출력됩니다.

```sh
# a 키 누르면 AVD, i 키 누르면 iOS 시뮬레이터 구동
› Press a to run on Android device/emulator, or i to run on iOS simulator.
# c 키 누르면 연결된 장치 정보 표시
› Press c to show info on connecting new devices.
# d 키 누르면 개발 도구 오픈(기본 웹 브라우저에서)
› Press d to open DevTools in the default web browser.
# Shift + d 키 누르면 프로젝트 시작 과정에서 항상 개발 도구 오픈
› Press shift-d to enable automatically opening DevTools at startup.
# e 키 누르면 이메일로 앱 링크 전송
› Press e to send an app link with email.
# p 키 누르면 배포 모드로 토글 (현재는 개발 모드)
› Press p to toggle production mode. (current mode: development)
# r 키 누르면 번들러 재실행, Shift + r 키 누르면 캐시 비우고 재실행
› Press r to restart bundler, or shift-r to restart and clear cache.
# s 키 누르면 로그아웃
› Press s to sign out. (Signed in as @yamoo9.)
```

## Live Reload

App.js 파일을 열어 \<Text\> 컴포넌트 요소의 콘텐츠를 변경 저장하면 실시간으로 앱에 반영됩니다.

```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App.js를 열어 앱 작업을 시작하십시오!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```