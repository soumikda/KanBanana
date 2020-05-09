import React, { useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import HeaderLogout from "./HeaderLogout"
import HeaderLogin from "./HeaderLogin"

function Header(props) {
  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              <strong>KanBaNaNa</strong>
            </Link>
          </h4>
          {props.login ? <HeaderLogin setlogin={props.setLogin} /> : <HeaderLogout setlogin={props.setLogin} />}
        </div>
      </header>
    </>
  )
}

export default Header
