import React, { useState } from "react"
import Page from "./Paget"
import Axios from "axios"

function HomeGuest() {
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8080/register", { username: name, email: email, password: password })
      console.log("User created")
    } catch (e) {
      console.log("User failed ")
    }
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Page title="Home">
        <div className="row align-items-center">
          <div className="col-lg-7 py-3 py-md-5">
            <h1 className="display-3">Planning and Organizing taking a lot of your time?</h1>
            <p className="lead text-muted">Do you find it hard striking a balance between updating your journals and To-Do lists and staying organized at the same time? Would you find it useful if someone could track your ongoing tasks, update all your project dashboards and summerize all your completed tasks so that you could reflect on where you spent your efforts? Let us take away your redundent effort of staying organized and managing your progress reports.</p>
          </div>
          <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input onChange={(e) => setName(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
              </div>
              <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                Sign up for ComplexApp
              </button>
            </form>
          </div>
        </div>
      </Page>
    </>
  )
}

export default HomeGuest
