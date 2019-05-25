import _ from 'lodash'
/*
  items	아이템 집합
  pageNumber	현재 페이지 번호
  pageSize	한 화면에 뿌려질 페이지 개수
*/

export const paginate = (items, pageNumber, pageSize) => {
  // 예: (1페이지 - 1) * 3 => 0 ➪ [0,1,2]
  // 예: (2페이지 - 1) * 3 => 3 ➪ [3,4,5]
  const startIndex = (pageNumber - 1) * pageSize

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value()
}