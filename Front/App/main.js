import React, { useState } from "react"
import ReactDOM from "react-dom"
import Board from "react-trello"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import HomeGuest from "./component/HomeGuest"

function Main() {
  const [login, setLogin] = useState(localStorage.getItem("username") ? true : false)

  const data = {
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        label: "2/2",
        cards: [
          { id: "Card1", title: "Write Blog", description: "Can AI make memes", label: "30 mins", draggable: false },
          { id: "Card2", title: "Pay Rent", description: "Transfer via NEFT", label: "5 mins", metadata: { sha: "be312a1" } },
        ],
      },
      {
        id: "lane2",
        title: "Completed",
        label: "0/0",
        cards: [],
      },
    ],
  }

  return (
    <BrowserRouter>
      <Header login={login} setLogin={setLogin} />
      <Switch>
        <Route path="/" exact>
          {login ? <Board data={data} /> : <HomeGuest />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
