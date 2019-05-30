import React, { Component } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import RatingStars from 'components/RatingStars'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
  },
  address: {
    width: 150,
    color: '#686968',
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 100,
    margin: 17,
  },
  button: {
    position: 'relative',
    right: 2,
    marginTop: 4,
    maxWidth: 80,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#0154fe',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    color: '#0154fe',
  },
})

export default class WonjuReviewInfo extends Component {
  static navigationOptions = {
    title: '가볼만 한 곳 정보',
  }

  handleAddReview = () => {
    this.props.navigation.navigate('AddReview')
  }

  render() {
    const review = this.props.navigation.getParam('review')
    const id = Number(review.id)
    const image = id < 10 ? `0${id}` : id
    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{ uri: `http://localhost:3000/assets/review-${image}.jpg` }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <Text style={styles.title}>{review.title}</Text>
            <Text style={styles.address}>{review.address}</Text>
            <RatingStars rating={review.rating} size={17} color="#0154fe" />
            <TouchableOpacity style={styles.button} onPress={this.handleAddReview}>
              <Text style={styles.buttonText}>리뷰 남기기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
