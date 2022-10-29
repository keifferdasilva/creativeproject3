import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">The Game</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/store">Store</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/community">Community</Link>
          </li>
        </ul>
        <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
                <Link class='nav-link'>Login</Link>
            </li>
            <li>
                <Link class='nav-link play'>Play Now!</Link>
            </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;