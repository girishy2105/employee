import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { puturl, geturl } from './Config'

const Edit = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: '',
    Employeename: '',
    Employeeage: '',
    Employeesalary: '',
    Employeegrade: '',
    Employeedepartment: '',
    EmployeeL1: '',
  })

  const setdata = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }

  const { id } = useParams('')
  console.log(id)

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
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
      setINP(data)
      console.log('get data')
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  // GETTING EMP CODE FOR DROPDOWN
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const getempdata = async (e) => {
    const res = await fetch(geturl, {
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
      console.log('getempdata')
    }
  }

  useEffect(() => {
    getempdata()
  }, [])

  const updateuser = async (e) => {
    e.preventDefault()

    const {
      EmployeeCode,
      Employeename,
      Employeeage,
      Employeesalary,
      Employeegrade,
      Employeedepartment,
      EmployeeL1,
    } = inpval

    const res2 = await fetch(puturl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        EmployeeCode,
        Employeename,
        Employeeage,
        Employeesalary,
        Employeegrade,
        Employeedepartment,
        EmployeeL1,
      }),
    })

    const data2 = await res2.json()
    console.log(data2)

    if (res2.status === 422 || !data2) {
      alert('fill the data')
    } else {
      alert('data updated')
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
                <a className='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item1'>
                <a
                  className='nav-link active '
                  aria-current='page'
                  href='/employee'
                >
                  Employee
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
                  <b>Login</b>
                </a>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className='Auth-form-container1'>
        <form className='Auth-form1'>
          <div className='Auth-form-content1'>
            <h3 className='Auth-form-title1'>UPDATE USER</h3>

            {/* <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  EmployeeCode:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter EMP code'
                  id='ExampleInputPassword'
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name='EmployeeCode'
                />
              </div> */}

            <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Employee Code:
                </label>
                <select
                  className='form-control'
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name='EmployeeCode'
                >
                  <option selected> select emp code</option>
                  {getuserdata.map((element, id) => {
                    return (
                      <>
                        <option> {element.EmployeeCode}</option>
                      </>
                    )
                  })}
                </select>
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  EmployeeName:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputPassword'
                  value={inpval.Employeename}
                  onChange={setdata}
                  name='Employeename'
                />
              </div>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  EmployeeAge:
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter Age'
                  id='ExampleInputPassword'
                  value={inpval.Employeeage}
                  onChange={setdata}
                  name='Employeeage'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  Salary:
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter Salary'
                  id='ExampleInputPassword'
                  value={inpval.Employeesalary}
                  onChange={setdata}
                  name='Employeesalary'
                />
              </div>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  EmployeeGrade:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Grade'
                  id='ExampleInputPassword'
                  value={inpval.Employeegrade}
                  onChange={setdata}
                  name='Employeegrade'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  L+1:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter L+1'
                  id='ExampleInputPassword'
                  value={inpval.EmployeeL1}
                  onChange={setdata}
                  name='EmployeeL1'
                />
              </div>
              <div className='d-grid gap-2 mt-3'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={updateuser}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Edit
