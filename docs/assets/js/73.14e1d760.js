(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{162:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"비동기-저장소-활용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기-저장소-활용","aria-hidden":"true"}},[t._v("#")]),t._v(" 비동기 저장소 활용")]),t._v(" "),s("p",[t._v("React Native는 간단한 텍스트 데이터를 장치에서 관리할 수 있는 "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsyncStorage"),s("OutboundLink")],1),t._v("가 내장되어 사용되어 왔으나, 현재 AsyncStorage 대신, "),s("a",{attrs:{href:"https://github.com/react-native-community/react-native-async-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Async Storage"),s("OutboundLink")],1),t._v("를 사용해 설정(config)과 같은 작은 텍스트 데이터를 관리하는데 활용하라고 공식 문서는 안내합니다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("React Native Async Storage는 비동기, 비 암호화, 키-값 스토리지 시스템으로 "),s("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Storage API"),s("OutboundLink")],1),t._v("와 사용법이 유사합니다.")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("React Native Async Storage는 텍스트 정보만 저장 할 수 있습니다. 객체 또는 숫자와 같은 데이터 유형을 설정할 수 없습니다.")])]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[t._v("하지만 글을 작성 중인 "),s("time",{attrs:{datetime:"2019.05.15"}},[t._v("현재(2019년 5월 15일)")]),t._v(" "),s("a",{attrs:{href:"https://github.com/react-native-community/react-native-async-storage/issues/102",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsyncStorage is null"),s("OutboundLink")],1),t._v(" 이슈가 있어 다음과 같은 오류가 출력됩니다.")]),t._v(" "),s("p",[t._v("==========================================================================")]),t._v(" "),s("p",[t._v("[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.")]),t._v(" "),s("p",[t._v("To fix this issue try these steps:")]),t._v(" "),s("p",[t._v("• Run "),s("code",[t._v("react-native link @react-native-community/async-storage")]),t._v(" in the project root.")]),t._v(" "),s("p",[t._v("• Rebuild and restart the app.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"380px","margin-left":"0"},attrs:{src:"error-react-native-async-storage.png"}})],1),t._v(" "),s("p",[t._v("그래서 현 시점까지 뚜렷한 문제 해결책이 없어 React Native가 내장한 AsyncStorage 모듈(Deprecated)을 활용합니다.")]),t._v(" "),s("h2",{attrs:{id:"리뷰-작성자-이름-저장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리뷰-작성자-이름-저장","aria-hidden":"true"}},[t._v("#")]),t._v(" 리뷰 작성자 이름 저장")]),t._v(" "),s("p",[t._v("Async Storage를 활용해 한 번 작성된 리뷰 작성자의 이름을 모바일 장치에 저장 되도록 설정해보겠습니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"320px","margin-left":"0"},attrs:{src:"reviewer.png"}}),t._v(" "),s("h2",{attrs:{id:"asyncstorage-모듈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asyncstorage-모듈","aria-hidden":"true"}},[t._v("#")]),t._v(" AsyncStorage 모듈")]),t._v(" "),s("p",[t._v("React Native의 모듈 AsyncStorage를 불러 옵니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  StyleSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  TextInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  View"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  TouchableOpacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ActivityIndicator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  AsyncStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"비동기-저장소-쓰기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기-저장소-쓰기","aria-hidden":"true"}},[t._v("#")]),t._v(" 비동기 저장소 쓰기")]),t._v(" "),s("p",[t._v("AsyncStorage의 "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage#setitem",target:"_blank",rel:"noopener noreferrer"}},[t._v("setItem()"),s("OutboundLink")],1),t._v(" 메서드를 사용해 저장할 데이터 이름, 데이터 순으로 전달해 사용자가 '리뷰 저장' 버튼을 누르면 리뷰 작성자 이름을 비동기 저장소에 저장합니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleSubmitReview")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" review "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n  AsyncStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reviewer_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"비동기-저장소-읽기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기-저장소-읽기","aria-hidden":"true"}},[t._v("#")]),t._v(" 비동기 저장소 읽기")]),t._v(" "),s("p",[t._v("AsyncStorage의 "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage#getitem",target:"_blank",rel:"noopener noreferrer"}},[t._v("getItem()"),s("OutboundLink")],1),t._v(" 메서드를 사용해 컴포넌트 마운트 시점에\n저장된 리뷰 작성자 이름을 가져옵니다. 작성자 이름이 존재한다면? 컴포넌트의 상태 name 값으로 설정 합니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  AsyncStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reviewer_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("AsyncStorage에 저장된 키를 지울 때는 "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage#removeitem",target:"_blank",rel:"noopener noreferrer"}},[t._v("removeItem()"),s("OutboundLink")],1),t._v(", 모두 비울 때는  "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage#clear",target:"_blank",rel:"noopener noreferrer"}},[t._v("clear()"),s("OutboundLink")],1),t._v(" 메서드를 사용합니다.")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("AsyncStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reviewer_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAsyncStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("그 외 설정 가능한 메서드는 "),s("a",{attrs:{href:"https://facebook.github.io/react-native/docs/asyncstorage#methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsyncStorage Methods"),s("OutboundLink")],1),t._v(" 문서를 참고합니다.")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("AsyncStorage를 반영한 후, 한 번 입력했던 리뷰 작성자 이름은 다음 리뷰를 쓸 때 저장된 데이터를 불러와 사용합니다.")]),t._v(" "),s("base-img",{staticStyle:{"max-width":"430px","margin-left":"0"},attrs:{src:"async-storage-memory.png"}})],1)},[],!1,null,null,null);a.default=e.exports}}]);