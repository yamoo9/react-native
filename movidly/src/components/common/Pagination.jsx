import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Pagination = props => {
  const { itemsCount, currentPage, pageSize, onPageChange } = props
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)

  function activeClass(page) {
    return page === currentPage ? 'page-item active' : 'page-item'
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={activeClass(page)}>
            <a
              href=""
              className="page-link"
              onClick={e => onPageChange(page, e)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
