import React, { useState, useEffect } from 'react'
import { post, geturl } from './Config'

const Deptregister = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: '',
    Departmentname: '',
    Departmentjoining: '',
    Status: '',
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

  // GETTING EMP CODE FOR DROPDOWN
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const getdata = async (e) => {
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
      console.log('getdata')
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  // ADD DEPARTMENT
  const addinpdata = async (e) => {
    e.preventDefault()
    const { EmployeeCode, Departmentname, Departmentjoining, Status } = inpval
    const res = await fetch(post, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        EmployeeCode,
        Departmentjoining,
        Departmentname,
        Status,
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
            <h3 className='title1'>New Department </h3>
            <br></br>

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
                <label for='ExampleInputPassword1' class=' form=label'>
                  Department Name:
                </label>
                <select
                  className='form-control'
                  value={inpval.Departmentname}
                  onChange={setdata}
                  name='Departmentname'
                >
                  <option selected> Select Dept Name</option>
                  <option> DGTL</option>
                  <option>ERP</option>
                  <option> HR</option>
                </select>
              </div>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Department Joining:
                </label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='Enter Date'
                  id='ExampleInputAge'
                  value={inpval.Departmentjoining}
                  onChange={setdata}
                  name='Departmentjoining'
                />
              </div>

              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Status:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Status'
                  id='ExampleInputSalary'
                  value={inpval.Status}
                  onChange={setdata}
                  name='Status'
                />
              </div>

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

export default Deptregister
