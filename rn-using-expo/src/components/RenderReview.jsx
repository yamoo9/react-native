import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import RatingStars from './RatingStars'

const styles = StyleSheet.create({
  appList: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  titleAddress: {
    flex: 9,
    paddingRight: 10,
    paddingLeft: 5,
  },
  titleText: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  addressText: {
    fontSize: 13,
    lineHeight: 14,
    color: '#686968',
  },
  edge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    minWidth: 50,
  },
  edgeText: {
    fontSize: 14,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    fontSize: 8,
  },
  info: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dee1e6',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
  },
})

class RenderReview extends Component {
  state = {
    isVisibleInfo: false,
  }

  zebraStyle = index => ({ backgroundColor: index % 2 ? null : 'rgba(0,0,0,0.03)' })
  handleToggleInfo = e => {
    this.props.navigation.navigate('Info', {
      review: this.props.reviewItem.item,
    })
  }
  render() {
    const { reviewItem } = this.props
    const { item, index } = reviewItem
    const imageIndex = index + 1
    return (
      <View key={item.id} style={this.zebraStyle(index)}>
        <View style={styles.appList}>
          <View style={[styles.edge, {paddingHorizontal: 30}]}>
            <RatingStars rating={item.rating} size={17} color="#0154fe" />
          </View>
          <View style={styles.titleAddress}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.addressText}>{item.address}</Text>
          </View>
          <View style={styles.edge}>
            <TouchableOpacity onPress={this.handleToggleInfo} style={styles.button}>
              <Text style={styles.edgeText}>정보</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isVisibleInfo && (
          <View style={styles.info}>
            <View
              style={{
                marginBottom: 10,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#3d5afe',
              }}>
              <Image
                source={{
                  uri: `http://localhost:3000/assets/review-${
                    imageIndex < 10 ? '0' + imageIndex : imageIndex
                  }.jpg`,
                }}
                style={{ width: '100%', height: 180 }}
                resizeMode="center"
              />
            </View>
            <Text style={styles.infoText}>{item.title} 정보</Text>
          </View>
        )}
      </View>
    )
  }
}

export default withNavigation(RenderReview)
