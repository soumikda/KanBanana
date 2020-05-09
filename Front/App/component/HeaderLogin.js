import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import { withRouter } from "react-router-dom"

function HeaderLogin(props) {
  async function handlesubmit(e) {
    e.preventDefault()

    localStorage.removeItem("username")
    localStorage.removeItem("token")

    props.setlogin(false)

    props.history.push("")
  }
  return (
    <>
      <div classNmae="flex-row my-3 my-md-0">
        <a href="#" class="text-white mr-2 header-search-icon">
          <i className="fas fa-search"></i>
        </a>
        <span className="mr-2 header-chat-icon text-white">
          <i className="fas fa-comment"></i>
          <span className="chat-count-badge text-white"> </span>
        </span>
        <a href="#" className="mr-2">
          <img className="small-header-avatar" src="https://secure.gravatar.com/avatar/3dfcd7a0f07c19e4289919cbec9a1969" />
        </a>
        <button onClick={handlesubmit} className="btn btn-sm btn-secondary">
          Sign Out
        </button>
      </div>
    </>
  )
}

export default withRouter(HeaderLogin)
