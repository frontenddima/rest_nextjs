import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Layout from '../../components/Layout';


async function publish(id) {
    const res = await fetch(`http://localhost:3000/api/publish/${id}`, {
        method: 'PUT'
    })
    const data = await res.json()
    Router.push('/publish')
}

async function destroy(id) {
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    Router.push('/drafts')
}

const Post = props => {
    let title = props.title
    if(!props.published) {
        title = `${title} (Draft)`
    }
    const authorName = props.author ? props.author.name : 'Unknown author'

    return(
        <div>
            <Layout />
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">View Post</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       
      </li>
      <li class="nav-item">
        
      </li>
    </ul>
  </div>
</nav>

<div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Title: </strong>{title}</li>
                        <li class="list-group-item"><strong>AuthorName: </strong>by {authorName}</li>
                        <li class="list-group-item"> 
                        <strong>Content: </strong>
                            <ReactMarkdown source={props.content} />
                        </li>
                        <li class="list-group-item"> 
                            {
                                  !props.published && (
                                    <button className="btn btn-info" onClick={() => publish(props.id)}>Publish</button>
                                )}
                                    <button className="btn btn-danger" onClick={() => destroy(props.id)}>Delete</button>
                            
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/post/${context.params.id}`)
    const data = await res.json()

    return {props: {...data}}
}

export default Post