import React from "react"
import UserData from './Userdata'
import axios from 'axios'

class Users extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('http://localhost:8000/API/User/')
      .then(res => {
        this.setState({
          users: res.data
        })
        console.log(res.data)
      })
  }
  render() {
    return (
      <UserData udatas={this.state.users} />
    )
  }
}
export default Users
