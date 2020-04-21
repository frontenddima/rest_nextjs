import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [authorEmail, setAuthorEmail] = useState('')

    const submitData = async e => {
        e.preventDefault()
        try {
            const body = {title, content, authorEmail}
            const res = await fetch(`http://localhost:3000/api/post`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            const data = await res.json()
            Router.push('/drafts')
        } catch(error) {
            console.error(error)
        }
      
    } 
    return(
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                CreatePost
                            </div>
                            <div className="card-body">
                            <form onSubmit={submitData}>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Title</label>
                                <input 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    autoFocus
                                    placeholder="Title"
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                </div>
                                <div className="form-group">
                            <label for="exampleInputEmail1">AuthorEmail</label>
                                <input
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    autoFocus
                                    placeholder="email address"
                                    type="text"
                                    value={authorEmail}
                                    onChange={e => setAuthorEmail(e.target.value)}
                                />
                            </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Content</label>
                                <textarea 
                                    class="form-control" 
                                    autoFocus
                                    placeholder="...content"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                    id="exampleFormControlTextarea1" 
                                    rows="3">
                                </textarea>
                                </div>
                                    <input
                                    className="btn btn-primary" 
                                    disabled={!title || !authorEmail || !content}
                                    type="submit"
                                    value="Create"
                                />
                            </form>
          
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create