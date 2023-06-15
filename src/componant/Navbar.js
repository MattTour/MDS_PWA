import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link active" aria-current="page">
                                <Link to='/'>Accueil</Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/page1" class="nav-link active" aria-current="page">
                                <Link to='/page1'>Page1</Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/page2" class="nav-link active" aria-current="page">
                                <Link to='/page2'>Page2</Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/page3" class="nav-link active" aria-current="page">
                                <Link to='/page3'>Page3</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;