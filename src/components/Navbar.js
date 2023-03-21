import React, { useState } from 'react'
import { Link } from 'gatsby'
import title from '../assets/images/title.png'
import { IoMenuOutline } from "react-icons/io5"
import styled from 'styled-components'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <Wrapper>
        <nav className="nav-bar">
        <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={title} alt="title" />
          </Link>
         <div className="nav-btn" onClick={() => setShow(!show)}>
            <IoMenuOutline size="24"/>
        </div>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            projects
          </Link>
          <Link
            to="/photo"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            photo
          </Link>
          <Link
            to="/video"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            video
          </Link>
                    <Link
            to="/products"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            products
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            contact
          </Link>
        </div>
        </div>
    </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.nav-bar {
    width: 100vw;
}

.nav-center {
    width: 90%;
    margin: 0 auto;
    max-width: 1170px;

}

.nav-header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-header img {
    width: 200px;
}

.nav-links {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
}

.show-links {
    height: 23.9375rem;
}

.nav-link {
    display: block;
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 0;
}

.active-link {
    color: var(--clr-grey-5);
}
  
@media screen and (min-width: 576px) {
    .nav-center svg {
        display: none;
    }
    .nav-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-links{
        height: 100%;
        display: flex;
        overflow: visible;
    }
    .nav-link {
    padding: 0;
    margin-left: 3rem;
}
}

@media screen and (min-width: 2560px) {
    .nav-center {
            max-width: 1800px;
    }
  }
`

export default Navbar