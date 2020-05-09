import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | ComplexApp`
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Container narrow={props.narrow}>{props.children}</Container>
    </>
  )
}

export default Page
