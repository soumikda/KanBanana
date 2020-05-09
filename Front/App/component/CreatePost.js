import React, { useEffect, useState } from "react"
import Page from "./Paget"
import Axios from "axios"
import { withRouter } from "react-router-dom"

function CreatePost(props) {
  const [title, setTitle] = useState()
  const [bodycontent, setBodycontent] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      var res = await Axios.post("http://localhost:8080/create-post", { title: title, body: bodycontent, token: localStorage.getItem("token") })
      console.log(res)
      props.setFlashmessage(title + " Created")
      props.history.push(`view-single-post/${res.data}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Page title="Create New Post" narrow={false}>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="post-title" class="text-muted mb-1">
              <small>Title</small>
            </label>
            <input onChange={(e) => setTitle(e.target.value)} autofocus name="title" id="post-title" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
          </div>

          <div class="form-group">
            <label for="post-body" class="text-muted mb-1 d-block">
              <small>Body Content</small>
            </label>
            <textarea onChange={(e) => setBodycontent(e.target.value)} name="body" id="post-body" class="body-content tall-textarea form-control" type="text"></textarea>
          </div>

          <button class="btn btn-primary">Save New Post</button>
        </form>
      </Page>
    </>
  )
}

export default withRouter(CreatePost)
