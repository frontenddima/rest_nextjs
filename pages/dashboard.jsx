import React from 'react'
import Create from '../pages/create'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout'

const Dashboard = () => {
    const router = useRouter()

    const isActive = (pathname) => router.pathname === pathname
    return(
        <div>
            <Layout />
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link href="/drafts">
          <a data-active={isActive('/drafts')} class="nav-link" href="#">viewPost</a>
        </Link>
      </li>
      <li class="nav-item">

      </li>
    </ul>
  </div>
</nav>
           <Create />
        </div>
    )
}

export default Dashboard