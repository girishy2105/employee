import React, { useState } from "react";
import { json } from "react-router-dom";

const Newuser = () => {
  const [inpval, setINP] = useState({
    code: "",
    name: "",
    age: "",
    salary: "",
    grade: "",
    department: "",
    L1: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { code, name, age, salary, grade, department, L1 } = inpval.body;
    const res = await fetch("/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        name,
        age,
        salary,
        grade,
        department,
        L1,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Data Added Successfully");
    }
  };
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="logo">
            <img src={"./logo1.png"} height="50"></img>
          </div>
          <a className="navbar-brand" href=""></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item1">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="employee"
                >
                  Employee
                </a>
              </li>

              <li className="nav-item1">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="about"
                >
                  About
                </a>
              </li>

              <li className="nav-item1">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="login"
                >
                  <b>Login</b>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ---------------------------------------Form---------------------------------------------- */}

      <div className="Auth-form-container1">
        <form className="Auth-form1">
          <div className="Auth-form-content1">
            <h3 className="Auth-form-title1">New User</h3>

            <div className="row">
              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Salarycode"
                  id="ExampleInputCode"
                  value={inpval.code}
                  onChange={setdata}
                  name="code"
                />
              </div>

              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputName"
                  value={inpval.name}
                  onChange={setdata}
                  name="name"
                />
              </div>
              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Age:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  id="ExampleInputAge"
                  value={inpval.age}
                  onChange={setdata}
                  name="age"
                />
              </div>

              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Salary:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Salary"
                  id="ExampleInputSalary"
                  value={inpval.salary}
                  onChange={setdata}
                  name="salary"
                />
              </div>
              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Grade:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Grade"
                  id="ExampleInputGrade"
                  value={inpval.grade}
                  onChange={setdata}
                  name="grade"
                />
              </div>

              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Department:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Department"
                  id="ExampleInputDepartment"
                  value={inpval.department}
                  onChange={setdata}
                  name="department"
                />
              </div>

              <div className="mb-3 col-lg-3 col-md-3 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  L+1:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter L+1"
                  id="ExampleInputL1"
                  value={inpval.L1}
                  onChange={setdata}
                  name="L1"
                />
              </div>
              <div className="mb-3 col-lg-12 col-md-12 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Upload Photo:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputPassword1"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  onClick={addinpdata}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Newuser;
