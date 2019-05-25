import React from 'react'
import {number, func} from 'prop-types'

import _ from 'lodash'

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)
  const activeClass = page => (page === currentPage ? 'active' : '')

  return (
    <nav aria-label="영화 정보 페이지네이션">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={`page-item ${activeClass(page)}`}>
            <a onClick={e => onPageChange(page, e)} className="page-link" href="">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: number.isRequired,
  currentPage: number.isRequired,
  pageSize: number.isRequired,
  onPageChange: func.isRequired,
}

export default Pagination
