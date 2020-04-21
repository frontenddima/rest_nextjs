import ReactMarkdown from 'react-markdown'
import Layout from './Layout';
import Router from 'next/router';


const Post = ({post}) => {
    const authorName = post.author ? post.author.name : 'Unknown author'
    return(
        <div>
            <Layout />
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <ul class="list-group list-group-flush" onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
                        <li class="list-group-item"><strong>Title: </strong>{post.title}</li>
                        <li class="list-group-item"><strong>AuthorName: </strong>by {authorName}</li>
                        <li class="list-group-item"> 
                        <strong>Content: </strong>
                            <ReactMarkdown source={post.content} />
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post