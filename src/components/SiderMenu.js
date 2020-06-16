import React, { useState } from 'react';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { DragDropContext,  Draggable, Droppable } from 'react-beautiful-dnd'

const renderMenuItem = item => (
  <Menu.Item
    key={item.key}
  >
    <Link to={(item.route || item.key) + (item.query || '')}>
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
)

const renderSubMenu = item => (
  <Menu.SubMenu
  key={item.key}
  title={
      <span>
          {/* {item.icon && <Icon type={item.icon} />} */}
          <span className="nav-text">{item.title}</span>
      </span>
  }>
    {item.subs.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
)

export default ({ menus, ...props}) => {
  const [dragItems, setDragItems] = useState(menus);
  console.log(56565555, props)
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed)
  }
  const onDragEnd = result => {
    if (!result.destination) {
      return 
    }

    const _items = reorder(dragItems, result.source.index, result.destination.index)
    setDragItems(_items)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable  droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {dragItems.map((item, index) => (
                  <Draggable key={item.key} draggableId={item.key} index={index}>
                      {(provided, snapshot) => (
                        <div>
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <Menu
                              theme="dark"
                              key={index}
                              {...props}
                            >
                              {item.subs ? renderSubMenu(item) : renderMenuItem(item)}
                            </Menu>
                          </div>
                          {provided.placeholder}
                        </div>
                      )
                      }
                    </Draggable>
                  ))
                }
              </div>
            )}  
      </Droppable>
    </DragDropContext>
  )
}