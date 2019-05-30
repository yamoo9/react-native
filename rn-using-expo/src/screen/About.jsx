import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  about: {
    flex: 1,
    padding: 26,
  },
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  boldText: {
    fontWeight: '800',
  },
  image: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 20,
    color: '#454545',
  },
  map: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#dedede',
  },
})

export class About extends Component {
  render() {
    return (
      <View style={styles.about}>
        <Image source={require('assets/logo.png')} style={styles.image} />
        <Text style={styles.header}>
          <Text style={styles.boldText}>'원주 가볼만 한 곳'</Text> 리뷰 앱 소개
        </Text>
        <Text style={styles.text}>
          플레이 원주 앱은 서울 근교에 위치한 강원도 원주에 가볼만 한 곳을 소개하는 앱입니다. 원주로
          여행을 계획하는 이들을 위한 여행지를 선정하여 소개합니다. 원주는 전국에서 유일무이 하게
          '기업도시'와 '혁신도시'를 동시 보유하고 있습니다.
        </Text>
        <Text style={styles.text}>
          박경리 문학 공원, 소금산 출렁다리, 뮤지엄 산, 치악산, 구룡사, 허브팜, 한지 테마파크 등
          다양한 장소에 관한 소개를 손쉽게 찾아볼 수 있습니다.
        </Text>
        <Image source={require('assets/map.png')} style={styles.map} />
      </View>
    )
  }
}

export default About
