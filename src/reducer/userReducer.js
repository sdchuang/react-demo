
const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

function userReducer(state=initialState,action){
  switch (action.type){
    case 'change':
      return{
        name:action.name
      }
    default:
      return state
  }
}

function userListData(state=[],action){
  // console.log(action)
  switch (action.type){
    case 'userList':
    console.log(action)
      return{
        data:action.data
      }
    default:
      // console.log(action)
      return state
  }
}

export {
  userReducer,
  userListData,
}