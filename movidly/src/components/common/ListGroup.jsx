import React from 'react'

const styles = {
  display: 'block',
  textDecoration: 'none',
}

const ListGroup = props => {
  const { items, selectedItem, onItemSelect, contentProp, idProp } = props

  const activeClass = item => {
    return selectedItem === item ? 'list-group-item active' : 'list-group-item'
  }

  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[idProp]} className={activeClass(item)}>
          <a
            style={styles}
            role="tab"
            href=""
            className="list-group-tab"
            onClick={e => onItemSelect(item, e)}>
            {item[contentProp]}
          </a>
        </li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  idProp: '_id',
  contentProp: 'name',
}

export default ListGroup
