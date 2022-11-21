import React from 'react'

const Home = () => {
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <div className='logo'>
            <img src={'./logo1.png'} height='50'></img>
          </div>
          <a className='navbar-brand' href=''></a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='home'>
                  <b>Home</b>
                </a>
              </li>
              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='employee'
                >
                  Employee
                </a>
              </li>

              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='department'
                >
                  Department
                </a>
              </li>

              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='about'
                >
                  About
                </a>
              </li>

              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='login'
                >
                  Login
                </a>
              </li>
            </ul>
            {/* <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      {/* ---------------------------------------TABLE---------------------------------------------- */}

      <div className='mt-5'>
        <div className='container'>
          <div className='title'>
            <h1>This is the Employee Registration Website</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
