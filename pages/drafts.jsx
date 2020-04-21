import fetch from 'isomorphic-unfetch'
import Post from '../components/Post'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Drafts = props => {
    const router = useRouter()

    const isActive = (pathname) => router.pathname === pathname

    return(
        <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">List View</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link href="/publish">
            <a class="nav-link" data-active={isActive('/publish')}>
                Publish
            </a>
        </Link>
      </li>
      <li class="nav-item">
        
      </li>
    </ul>
  </div>
</nav>
            
            <main>
                {
                    props.drafts.map(post => (
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
    const res = await fetch('http://localhost:3000/api/drafts')
    const drafts = await res.json()
    return {
        props: { drafts }
    }
}

export default Drafts