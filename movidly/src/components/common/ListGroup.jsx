import React from 'react'
import styled from 'styled-components'

const ListGroupItem = styled.li`
  padding: 0;
`

const ListGroupTab = styled.a`
  display: block;
  padding: 0.75rem 1.25rem;
  text-decoration: none;

  :hover {
    text-decoration: inherit;
  }

  .active & {
    color: #fff;
  }
`

const ListGroup = ({ items, selectedItem, onItemSelect, idProp, contentProp }) => {
  const activeClass = item => {
    return selectedItem[idProp] === item[idProp] ? 'active' : ''
  }
  return (
    <>
      <ul className="list-group">
        {items.map((item, i) => (
          <ListGroupItem key={item[idProp]} className={`list-group-item ${activeClass(item)}`}>
            <ListGroupTab
              className="list-group-tab"
              role="tab"
              href=""
              onClick={e => onItemSelect(item, e)}>
              {item[contentProp]}
            </ListGroupTab>
          </ListGroupItem>
        ))}
      </ul>
    </>
  )
}

ListGroup.defaultProps = {
  idProp: 'id',
  contentProp: 'name',
}

export default ListGroup
