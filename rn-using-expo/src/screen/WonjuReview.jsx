import React, { Component } from 'react'
import { Platform, StyleSheet, FlatList, View, Text, TextInput, Image } from 'react-native'
import axios from 'axios'

import RenderReview from 'components/RenderReview'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: 47,
      },
      ios: {
        paddingTop: 36,
      },
    }),
  },
  appHeaderText: {
    padding: 14,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '300',
    color: '#fff',
    backgroundColor: Platform.OS === 'ios' ? '#3d5afe' : '#162442',
  },
  searchInput: {
    marginBottom: 2,
    borderBottomWidth: 1,
    borderColor: '#cacaca',
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#f0f0f0',
  },
})

export default class WonjuReviewApp extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    headline: '원주 가볼만 한 곳',
    search: null,
    reviews: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/wonju-reviews')
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(error => console.error(error.message))
  }

  handleSearchReview = query => {
    this.setState({
      search: query,
    })
  }
  filteredReviews = () => {
    const { search } = this.state
    return this.state.reviews.filter(review =>
      !search || !search.trim() ? review : review.title.includes(search)
    )
  }

  render() {
    const { headline, search } = this.state
    return (
      <View style={styles.appContainer}>
        <View>
          <View style={{ alignItems: 'center', paddingTop: 10 }}>
            <Image source={require('assets/logo.png')} accessibilityLabel="플레이 원주" />
          </View>
          <Text style={styles.appHeaderText}>{headline}</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="검색 키워드"
            onChangeText={query => this.handleSearchReview(query)}
            value={search}
          />
        </View>
        <FlatList
          data={this.filteredReviews()}
          renderItem={item => <RenderReview reviewItem={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
