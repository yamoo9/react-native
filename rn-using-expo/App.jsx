import React from 'react'

// React Navigation 모듈 불러오기
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

// Expo 벡터 아이콘(Vector Icon) 모듈 불러오기
import Icon from '@expo/vector-icons/Ionicons'

// 스크린 모듈 불러오기
import WonjuReview from 'screen/WonjuReview'
import WonjuReviewInfo from 'screen/WonjuReviewInfo'
import About from 'screen/About'
import AddReview from 'screen/AddReview'

// 경고 박스 비활성화
console.disableYellowBox = true

// 리뷰 스택 내비게이터
const ReviewsStack = createStackNavigator(
  // 스크린 설정
  {
    Home: { screen: WonjuReview },
    Info: { screen: WonjuReviewInfo },
  },
  {
    // 기본(공통) 내비게이션 옵션 설정
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0154fe',
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
)

// 아이콘 이름 설정
const iconNames = {
  Reviews: 'md-list-box',
  About: 'md-information-circle',
}

// 하단 탭 내비게이터
const BottomTabNavigator = createBottomTabNavigator(
  // 스크린 설정
  {
    Reviews: { screen: ReviewsStack },
    About: { screen: About },
  },
  {
    // 기본(공통) 내비게이션 옵션 설정
    defaultNavigationOptions: ({ navigation }) => {
      return {
        // 아이콘 설정
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          const name = iconNames[routeName]
          return <Icon name={name} color={tintColor} size={22} />
        },
      }
    },
    // 탭바 옵션 설정
    tabBarOptions: {
      activeBackgroundColor: 'rgba(218,239,251,0.6)',
      labelStyle: {
        fontSize: 14,
      },
    },
  }
)

// 모달 스택 네비게이터
const ModalStack = createStackNavigator(
  // 스크린 설정
  {
    Tabs: { screen: BottomTabNavigator },
    AddReview: { screen: AddReview },
  },
  // 옵션 설정
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
)

export default createAppContainer(ModalStack)
