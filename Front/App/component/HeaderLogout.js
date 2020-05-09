import React, { useState } from "react"
import Axios from "axios"

function HeaderLogout(props) {
  const [username, setName] = useState()
  const [password, setPassword] = useState()

  async function handlesubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:8080/login", { username: username, password: password })
      if (response.data) {
        localStorage.setItem("username", response.data.username)
        localStorage.setItem("token", response.data.token)
        console.log(response.data.token)
        props.setlogin(true)
      } else {
        console.log("Incorrenct Username/Password")
      }
      setName("")
      setPassword("")
    } catch (e) {
      console.log("loging failed")
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={(e) => setName(e.target.value)} value={username} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={(e) => setPassword(e.target.value)} value={password} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default HeaderLogout
