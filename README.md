# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

<br>

## RN 프로젝트 React Native로 시작하기

### 프로젝트 생성

npx 명령을 사용해 React Native 프로젝트를 시작할 수 있습니다.

```sh
$ npx react-native init <프로젝트-이름>
```

생성된 React Native 프로젝트 구조는 다음과 같습니다. android, ios는 네이티브 앱 프로젝트 디렉토리 입니다.

```sh
.
├── App.js
├── ios/
├── android/
├── __tests__/
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── node_modules/
├── package.json
└── yarn.lock
```

프로젝트 초기화 이후 화면에 다음과 같은 메시지가 출력됩니다. (주석 참고)

```sh
# iOS 앱 명령 실행
Run instructions for iOS:
  # 생성한 프로젝트 디렉토리로 이동한 다음 react-native run-ios 명령을 실행
  • cd /Users/<사용자-계정-이름>/Desktop/<프로젝트-이름> && react-native run-ios
  # 또는
  - or -
  # Xcode에서 프로젝트를 열고
  • Open ios/AwesomeProject.xcodeproj in Xcode
  # Run 버튼 클릭
  • Hit the Run button

# Android 앱 명령 실행
Run instructions for Android:
  # Android 에뮬레이터(VD)를 실행하거나, 실제 Android 장치(폰)이 USB로 컴퓨터에 연결되어 있어야 합니다.
  • Have an Android emulator running (quickest way to get started), or a device connected.
  # 생성한 프로젝트 디렉토리로 이동한 다음 react-native run-android 명령을 실행
  • cd /Users/<사용자-계정-이름>/Desktop/<프로젝트-이름> && react-native run-android
```

## 프로젝트 실행

### iOS 빌드

Xcode를 설치한 후, `run-ios` 명령을 실행하면 iOS Simulator로 앱이 열립니다.

```sh
$ react-native run-ios

# iOS 시뮬레이터를 지정하려면 --simulator 옵션 플래그를 설정합니다.
$ react-native run-ios --simulator="iPhone X"
```

### Android 빌드

Android 개발 환경을 구성하고 AVD 또는 모바일 폰을 연결한 후, `run-android` 명령을 실행하면 앱이 빌드 됩니다.

```sh
$ react-native run-android
```

### Hot Reloading 활성화

모바일 폰을 혼들거나, Cmd + D(iOS), Ctrl + M(Android) 키를 누르면 개발 메뉴가 표시 됩니다.
개발 메뉴에서 'Disable Hot Reloading'을 눌러 Enable로 변경하면 코드 수정/저장 할 때마다 자동으로 화면을 업데이트 합니다.

App.js 파일을 열어 instructions 코드 내용을 수정하고,
\<Text\> 콘텐츠를 변경 저장하여 실시간으로 시뮬레이터 또는 모바일 폰에 반영되는지 확인해봅니다.

```jsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: '다시로드하려면 Cmd R을 누르십시오.,\n' + 'Cmd+D 또는 폰을 흔들어 개발 메뉴를 표시합니다.',
  android:
    '키보드 R을 더블 탭하면 새로고침(리로드) 됩니다,\n' +
    '폰을 흔들어 개발 메뉴를 표시합니다.',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native에 오신 것을 환영합니다.!</Text>
        <Text style={styles.instructions}>시작하려면 App.j를 수정하십시오.</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
```

