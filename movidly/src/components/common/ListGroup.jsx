import React from 'react'

const ListGroup = ({ items, selectedItem, onItemSelect, idProp, contentProp }) => {
  const activeClass = item => {
    return selectedItem[idProp] === item[idProp] ? 'active' : ''
  }
  return (
    <div>
      <ul className="list-group">
        {items.map((item, i) => (
          <li key={item[idProp]} className={`list-group-item ${activeClass(item)}`}>
            <a className="list-group-tab" role="tab" href="" onClick={e => onItemSelect(item, e)}>
              {item[contentProp]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

ListGroup.defaultProps = {
  idProp: 'id',
  contentProp: 'name',
}

export default ListGroup
