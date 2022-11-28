import React, { useState, useEffect } from 'react'
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import { geturl } from './Config'
import { CSVLink } from 'react-csv'

const Employee = () => {
  const [getuserdata, setUserdata] = useState([])
  console.log('Employee getuserdata - ', getuserdata)

  const getdata = async (e) => {
    const res = await fetch(geturl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log('data - ', data)

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

  let filteredresult
  const handleSearch = (event) => {
    let searchtext = event.target.value
    console.log('handleSearch searchtext', searchtext)
    console.log('handleSearch getuserdata', getuserdata)
    filteredresult = getuserdata.filter((item) =>
      item.Employeename.toLowerCase().includes(searchtext.toLowerCase())
    )
    setUserdata(filteredresult)
    console.log('filteredresult', filteredresult)
  }

  const [getsortdata, setsortdata] = useState([])
  const handleSort = (event) => {
    let sortedData
    let sorted = event.target.value

    sortedData = getuserdata
    console.log('sortedData', getuserdata)
    if (sortedData !== null) {
      sortedData.sort((a, b) => {
        if (a['Employeeage'].toLowerCase() < b['Employeeage'].toLowerCase()) {
          return -1
        }
        if (a['Employeeage'].toLowerCase() > b['Employeeage'].toLowerCase()) {
          return 1
        }
      })
      setsortdata(sortedData)
      // setUserdata(sortedData)
      console.log('sortedData', sortedData)
    }
  }

  const deleteuser = async (EmployeeCode) => {
    const res2 = await fetch(
      `https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/employee/${EmployeeCode}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data2 = await res2.json()
    console.log('data2', data2)

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
          </div>
        </div>
      </nav>
      {/* ---------------------------------------TABLE---------------------------------------------- */}
      <div className='mt-5'>
        <div className='container'>
          <div className='ems'>
            <h3>Employee Registration</h3>
          </div>

          <div className='add_btn mt-2'>
            <NavLink to='/register' className='btn btn-primary'>
              Add User +
            </NavLink>
            <CSVLink
              data={getuserdata}
              // className='btn btn-success d-grid gap d-md-flex justify-content-md-end'
              className='btn btn-success download'
            >
              Download in Excel
            </CSVLink>
          </div>

          {/* <div class='form-outline'>
            <input
              type='text'
              id='form1'
              onChange={(e) => getdata(e.target.value)}
              class='form-control'
              placeholder='search employee'
              style={{ backgroundColor: '#ececec' }}
            />
            <button type='button' onClick={getdata} class='btn btn-success'>
              Search Employee
            </button>
          </div> */}

          <div class='form-outline mb-4'>
            <input
              id='search'
              type='text'
              placeholder='search by name'
              onChange={handleSearch}
            />
          </div>

          <table class='table'>
            <thead>
              <tr className='tabletop'>
                <th scope='col'>EmployeeCode</th>
                <th scope='col'>Employee Name</th>
                <button type='button' onClick={handleSort}>
                  Age
                </button>
                <th scope='col'>Salary</th>
                <th scope='col'>Grade</th>
                <th scope='col'>L+1</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                console.log('inside map', element)
                return (
                  <>
                    <tr>
                      <th scope='row'>{element.EmployeeCode}</th>
                      <td>{element.Employeename}</td>
                      <td>{element.Employeeage}</td>
                      <td>{element.Employeesalary}</td>
                      <td>{element.Employeegrade}</td>
                      <td>{element.EmployeeL1}</td>

                      <td className='d-flex justify-content-between'>
                        {/* <NavLink to={`/details/${element.EmployeeCode}`}>
                          <button className='btn btn-success'>VIEW</button>
                        </NavLink> */}
                        <NavLink to={`/edit/${element.EmployeeCode}`}>
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

export default Employee
