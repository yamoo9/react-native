import React, { Component } from 'react'
// import { View, Text, Linking } from 'react-native'
import { WebBrowser } from 'expo'
import styled from 'styled-components'

// Linking 컴포넌트 < React Native
// https://facebook.github.io/react-native/docs/linking

// WebBrowser 컴폰넌트 < Expo SDK
// https://docs.expo.io/versions/latest/sdk/webbrowser/

const AppContainer = styled.View`
  flex: 1;
`

const AppHeader = styled.View`
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  background: #36f;
`

const AppHeadertext = styled.Text`
  padding: 20px;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`

const AppList = styled.View`
  margin-top: 10px;
`

const AppListItem = styled.View`
  flex-direction: row;
  padding: 2px;
`

const StyledAppListItemColumn = styled.View`
  flex: ${props => props.flex || 1};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'stretch'};
  margin: 5px 0;
  padding: 5px;
`

const ColumnText = styled.Text`
  font-size: 16px;
`

const AppListItemColumn = props => (
  <StyledAppListItemColumn {...props}>{props.children}</StyledAppListItemColumn>
)

const ReviewTitle = styled.Text`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 600;
`
const ReviewAddress = styled.Text`
  font-size: 14px;
  color: #828181;
`

class WonjuReviewApp extends Component {
  state = {
    headline: '원주 가볼만 한 곳',
    reviews: [
      {
        id: '1',
        title: '박경리 문학 공원',
        address: '강원도 원주시 토지길 1',
        link: 'https://map.naver.com/local/siteview.nhn?code=11622447',
      },
      {
        id: '2',
        title: '소금산 출렁 다리',
        address: '강원도 원주시 지정면 소금산길 14',
        link: 'https://map.naver.com/local/siteview.nhn?code=1744499433',
      },
      {
        id: '3',
        title: '뮤지엄 산',
        address: '강원도 원주시 지정면 오크밸리2길 260',
        link: 'https://map.naver.com/local/siteview.nhn?code=34744833',
      },
    ],
  }

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppHeadertext>{this.state.headline}</AppHeadertext>
        </AppHeader>
        <AppList>
          {this.state.reviews.map(review => (
            <AppListItem key={review.id}>
              <AppListItemColumn alignItems="center">
                <ColumnText>{review.id}</ColumnText>
              </AppListItemColumn>
              <AppListItemColumn flex={6}>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewAddress>{review.address}</ReviewAddress>
              </AppListItemColumn>
              <AppListItemColumn>
                <ColumnText onPress={() => WebBrowser.openBrowserAsync(review.link)}>
                  link
                </ColumnText>
                {/* <ColumnText onPress={() => Linking.openURL(review.link)}>link</ColumnText> */}
              </AppListItemColumn>
            </AppListItem>
          ))}
        </AppList>
      </AppContainer>
    )
  }
}

export default WonjuReviewApp
