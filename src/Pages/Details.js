import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { NavLink, useParams } from 'react-router-dom'
import { geturl } from './Config'

const Details = () => {
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const { id } = useParams('')
  console.log(id)

  const getdata = async () => {
    const res = await fetch(geturl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 422 || !data) {
      console.log('error ')
    } else {
      setUserdata(data)
      console.log('get data')
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
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
      <div className='container mt-3'>
        <h1 style={{ fontWeight: 400 }}>Welcome Girish</h1>

        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <form>
              <h3 className='mt-3'>
                EmployeeCode: <span>{getuserdata.EmployeeCode}</span>
              </h3>
              <br></br>
              <h3 className='mt-3'>
                Name: <span>{getuserdata.Employeename}</span>
              </h3>
              <br></br>
              <p className='mt-3'>
                Age: <span>{getuserdata.Employeeage}</span>
              </p>
              <br></br>
              <p className='mt-3'>
                Salary: <span>{getuserdata.Employeesalary}</span>
              </p>
              <br></br>
              <p className='mt-5'>
                Grade: <span> {getuserdata.Employeegrade}</span>
              </p>
              <br></br>
              <p className='mt-3'>
                L+1: <span>{getuserdata.EmployeeL1}</span>
              </p>
              <br></br>
              <button href='/employee'>Back To Employee Details</button>
            </form>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}

export default Details
