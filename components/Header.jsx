import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter()

    const isActive = (pathname) => router.pathname === pathname

    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link href="/signup">
            <a class="nav-link" data-active={isActive('/signup')}>Signup <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li class="nav-item">
      <Link href="/login">
        <a data-active={isActive('/login')} class="nav-link" href="#">Login</a>
      </Link>
      </li>
    </ul>
  </div>
</nav>


        </div>
    )
}

export default Header