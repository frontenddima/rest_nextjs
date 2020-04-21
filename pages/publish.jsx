import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Post from '../components/Post'

const Publish = props => {
    return(
        <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Publish</a>
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
            <Layout />
            <main>
                {
                    props.publish.map(post => (
                        <div key={post.id}>
                            <Post post={post} />
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/publish')
    const publish = await res.json()
    return {
        props: { publish }
    }
}

export default Publish