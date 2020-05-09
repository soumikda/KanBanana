import React, { useEffect } from "react"

function FlashMessage(props) {
  console.log("created post")
  return (
    <>
      <div className="floating-alerts">
        <div className="alert alert-success text-center floating-alert shadow-sm">{props.flashmessage}</div>
      </div>
    </>
  )
}

export default FlashMessage
