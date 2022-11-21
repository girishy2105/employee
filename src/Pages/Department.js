import React, { useState, useEffect } from 'react'
import { NavLink, UNSAFE_DataRouterStateContet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { get, delurl } from './Config'

const Department = () => {
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const getdata = async (e) => {
    const res = await fetch(get, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 404 || !data) {
      console.log('error')
    } else {
      setUserdata(data)
      console.log('getdata')
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  const deleteuser = async (EmployeeCode) => {
    const res2 = await fetch(
      `http://localhost:5001/Department/${EmployeeCode}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data2 = await res2.json()
    console.log(data2)

    if (res2.status === 422 || !data2) {
      console.log('error')
    } else {
      console.log('user deleted')
      getdata()
    }
  }

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
                <a className='nav-link active' aria-current='page' href='/home'>
                  Home
                </a>
              </li>
              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='/employee'
                >
                  <b>Employee Registration</b>
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
                  href='/about'
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
          <div className='ems'>
            <h3>Department Registration</h3>
          </div>
          <div className='add_btn mt-2'>
            <NavLink to='/deptregister' className='btn btn-primary'>
              Add Department +
            </NavLink>
          </div>

          <table class='table'>
            <thead>
              <tr className='tabletop'>
                <th scope='col'>EmployeeCode</th>
                <th scope='col'>Department Name</th>
                <th scope='col'>Department joining</th>
                <th scope='col'>Status</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope='row'>{element.EmployeeCode}</th>
                      <td>{element.Departmentname}</td>
                      <td>{element.Departmentjoining}</td>
                      <td>{element.Status}</td>

                      <td className='d-flex justify-content-between'>
                        <NavLink to={`/details/${element.EmployeeCode}`}>
                          <button className='btn btn-success'>VIEW</button>
                        </NavLink>
                        <NavLink to={`/editdept/${element.EmployeeCode}`}>
                          <button className='btn btn-primary'>EDIT</button>
                        </NavLink>

                        <button
                          className='btn btn-danger'
                          onClick={() => deleteuser(element.EmployeeCode)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  )
}

export default Department
