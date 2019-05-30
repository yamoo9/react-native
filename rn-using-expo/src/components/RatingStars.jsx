import React from 'react'
import { number, string } from 'prop-types'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// 평점(별점)을 정수, 소수로 변환하는 유틸리티 함수
const _convertRatingToIntDecimal = rating => {
  // 전달 받은 rating 숫자 값을 정수, 소수 문자 타입 아이템으로 구성되는 배열로 변경
  // 예: 3   => ['3', '0']
  // 예: 4.2 => ['4', '2']
  const convertNumberToArray = rating.toFixed(1).split('.')
  // 정수 문자를 정수 숫자로 변경
  const int = convertNumberToArray[0] * 1
  // 소수 문자를 소수 숫자로 변경
  const decimal = `0.${convertNumberToArray[1]}` * 1

  return { int, decimal }
}

const RatingStars = ({ rating, size, color, count }) => {
  // 별을 그릴 반복 횟수 설정
  const stars = [...Array(Math.ceil(count))]
  // 평점(별점)을 전달해 정수, 소수를 변환해 구조 분해 할당
  const { int, decimal } = _convertRatingToIntDecimal(rating)

  return (
    <View style={{ flexDirection: 'row', marginTop: -7 }}>
      {stars.map(($, index) => {
        // int 보다 index가 작을 경우, 'md-star'
        // int 보다 index가 크거나 같고 decial >= 0.5 && int === index 인 경우, 'md-star-half'
        // 그렇지 않은 경우 'md-star-outline'
        let name =
          int > index
            ? 'md-star'
            : decimal >= 0.5 && int === index
            ? 'md-star-half'
            : 'md-star-outline'
        return <Ionicons key={index} name={name} size={size} color={color} />
      })}
    </View>
  )
}

RatingStars.defaultProps = {
  size: 32,
  color: '#fde13e',
  count: 5,
}

RatingStars.propTypes = {
  rating: number.isRequired,
  size: number,
  color: string,
  count: number,
}

export default RatingStars
