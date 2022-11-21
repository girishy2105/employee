import React, { useState } from 'react'
import { posturl } from './Config'

const Register = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: '',
    Employeename: '',
    Employeeage: '',
    Employeesalary: '',
    Employeegrade: '',
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

  const addinpdata = async (e) => {
    e.preventDefault()
    const {
      EmployeeCode,
      Employeename,
      Employeeage,
      Employeesalary,
      Employeegrade,
      EmployeeL1,
    } = inpval
    const res = await fetch(posturl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        EmployeeCode,
        Employeename,
        Employeeage,
        Employeesalary,
        Employeegrade,
        EmployeeL1,
      }),
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 404 || !data) {
      alert('error')
      console.log('error')
    } else {
      alert('Data Added Successfully')
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
                <a className='nav-link active' aria-current='page' href='home'>
                  Home
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
                  <b>Login</b>
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
      {/* ---------------------------------------Form---------------------------------------------- */}

      <div className='Auth-form-container1'>
        <form className='Auth-form1'>
          <div className='Auth-form-content1'>
            <h3 className='title1'>New User</h3>
            <br></br>

            <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Employee Code:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Empcode'
                  id='ExampleInputCode'
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name='EmployeeCode'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputName'
                  value={inpval.Employeename}
                  onChange={setdata}
                  name='Employeename'
                />
              </div>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Age:
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter Age'
                  id='ExampleInputAge'
                  value={inpval.Employeeage}
                  onChange={setdata}
                  name='Employeeage'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Salary:
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter Salary'
                  id='ExampleInputSalary'
                  value={inpval.Employeesalary}
                  onChange={setdata}
                  name='Employeesalary'
                />
              </div>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Grade:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Grade'
                  id='ExampleInputGrade'
                  value={inpval.Employeegrade}
                  onChange={setdata}
                  name='Employeegrade'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  L+1:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter L+1'
                  id='ExampleInputL1'
                  value={inpval.EmployeeL1}
                  onChange={setdata}
                  name='EmployeeL1'
                />
              </div>
              {/* <div className='mb-3 col-lg-12 col-md-12 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Upload Photo:
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputPassword1'
                />
              </div> */}
              <div className='d-grid gap-2 mt-3'>
                <button
                  type='submit'
                  onClick={addinpdata}
                  className='btn btn-primary'
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

export default Register
