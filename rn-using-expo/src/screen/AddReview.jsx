import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Icon from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 160,
  },
  button: {
    position: 'absolute',
    zIndex: 10,
    right: 20,
    top: 60,
  },
  text: {
    fontSize: 25,
    color: '#434343',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  rating: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
    color: '#889',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#06c',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
})

export default class AddReview extends Component {
  state = {
    name: '',
    rating: null,
    review: '',
    isSubmitted: false,
  }

  componentDidMount() {
    const {name} = this.state
    AsyncStorage.getItem('reviewer_name').then(name => {
      if (name) { this.setState({ name }) }
    })
  }

  handleClose = () => {
    this.props.navigation.goBack()
  }

  handleSubmitReview = () => {
    this.setState({
      isSubmitted: true,
    })
    const { name, rating, review } = this.state

    AsyncStorage.setItem('reviewer_name', name)

    fetch('http://localhost:3000/wonju-reviews', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        rating,
        review,
      }),
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ isSubmitted: false }, () => {
          this.props.navigation.goBack()
        })
      })
      .catch(error => {
        this.setState({ isSubmitted: false })
        console.error(error.message)
      })
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1 }}
        extraScrollHeight={Platform.OS === 'android' ? 180 : 0}>
        <View style={[styles.container, this.state.isSubmitted && { paddingTop: 130 }]}>
          <TouchableOpacity style={styles.button} onPress={this.handleClose}>
            <Icon name="close" size={30} color="#0066cc" accessibilityLabel="닫기" />
          </TouchableOpacity>

          <Text style={styles.text}> 리뷰 남기기 </Text>

          <TextInput
            style={styles.input}
            placeholder="이름"
            accessibilityLabel="작성자 이름"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />

          <Text style={styles.rating}>평점을 남겨주세요</Text>

          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <TouchableOpacity
                key={i}
                style={styles.starButton}
                onPress={() => this.setState({ rating: i })}
                accessibilityHint={`탭 하면 ${i}점(5점 만점) 평점을 남깁니다.`}>
                <Ionicons
                  name="md-star"
                  size={60}
                  color={this.state.rating >= i ? '#ffd64c' : '#ccc'}
                />
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={[styles.input, { height: 150, marginBottom: 10, textAlignVertical: 'top' }]}
            placeholder="리뷰"
            value={this.state.review}
            onChangeText={review => this.setState({ review })}
            multiline={true}
            numberOfLines={5}
          />

          {this.state.isSubmitted && (
            <ActivityIndicator size="large" color="#06c" style={{ padding: 10 }} />
          )}

          <TouchableOpacity
            style={[styles.submitButton, this.state.isSubmitted && {backgroundColor: '#dedede'}]}
            disabled={this.state.isSubmitted}
            onPress={this.handleSubmitReview}>
            <Text style={[styles.submitButtonText, this.state.isSubmitted && {color: '#545950'}]}>리뷰 저장</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
