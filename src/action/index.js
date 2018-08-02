
import axios from 'axios'

export function userLists(data){
  return  async (dispatch) => {
    var url='http://localhost:3001/api/userList';
    let userData = await axios({
      method:'post',
      url:url,
      data:data,
      headers:{'Content-Type' : 'application/json'}
    });
    // console.log(userData)
    dispatch({
      type:'userList',
      data:userData.data.data
    })
  }
}