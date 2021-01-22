export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id
  }
})

const getId = () => (
  Math.floor(Math.random()*10000)
)


export const addItem = (itemType, itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    itemType,
    item: {
      id: getId(),
      ...itemContent
    }
  } 
})