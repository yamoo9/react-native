import React, { Component } from 'react'
import styled from 'styled-components'
import { WebBrowser } from 'expo'

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

const AppSearchInput = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #cacaca;
  padding: 20px;
  font-size: 16px;
  background: #f0f0f0;
  color: #06f;
`

const AppList = styled.View`
  margin-top: 10px;
`

const AppListItem = styled.View`
  flex-direction: row;
  padding: 2px;
  background: ${props => (props.zebra ? '#f4f4f4' : 'transparent')};
`

const AppListItemColumn = styled.View`
  flex: ${props => props.flex || 1};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'stretch'};
  margin: 5px 0;
  padding: 5px;
`

const ColumnText = styled.Text`
  font-size: 16px;
`

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
    search: '',
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
    const keyword = this.state.search.trim()
    const searchedReviews = this.state.reviews.filter(review => {
      return review.title.includes(keyword) || review.address.includes(keyword)
    })

    return (
      <AppContainer>
        <AppHeader>
          <AppHeadertext>{this.state.headline}</AppHeadertext>
          <AppSearchInput
            value={this.state.search}
            placeholder="문득 떠오른 장소 이름을 검색해보세요."
            // placeholder 스타일 속성
            placeholderTextColor="#656562"
            onChangeText={text => this.setState({ search: text })}
          />
        </AppHeader>
        <AppList>
          {searchedReviews.map((review, index) => (
            <AppListItem key={review.id} zebra={index % 2}>
              <AppListItemColumn alignItems="center">
                <ColumnText>{review.id}</ColumnText>
              </AppListItemColumn>
              <AppListItemColumn flex={6}>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewAddress>{review.address}</ReviewAddress>
              </AppListItemColumn>
              <AppListItemColumn>
                <ColumnText onPress={() => WebBrowser.openBrowserAsync(review.link)}>
                  보기
                </ColumnText>
              </AppListItemColumn>
            </AppListItem>
          ))}
        </AppList>
      </AppContainer>
    )
  }
}

export default WonjuReviewApp
