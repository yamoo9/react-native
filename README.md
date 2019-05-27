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
