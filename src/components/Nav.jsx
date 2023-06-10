import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const [isCreating, setIsCreating] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toLowerCase().includes("create")) {
      setIsCreating(true);
    } else {
      setIsCreating(false);
    }
  }, [location.pathname]);
  return (
    <div className={isCreating ? 'nav hide-stuff' : 'nav'}>
      <div className="content">
        <Link to={isCreating ? "/" : "/create"} style={{textDecoration: "none"}} className="logo">
            <span>IDAN</span>
            <span>
                TV
                <i className="fa fa-plus"></i>
            </span>
        </Link>
        <div className="links-holder">
            <div className='dummy-link'>Live TV</div>
            <div className='dummy-link'>Politics</div>
            <div className='dummy-link'>Business</div>
            <div className='dummy-link'>Sports</div>
        </div>
        <div className="search-and-language">
            <div className="search">
                <i className="fa fa-magnifying-glass"></i>
            </div>
            <div className="language-opener">
                EN
            </div>
            <div className="hamburger">
                <i className="fa fa-bars"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
