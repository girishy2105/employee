let posturl = ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/employee'

let geturl =
  ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/employee/get'

let puturl =
  ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/employee/put'

let delurl =
  ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/employee/:code'

let post = ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/department'

let get =
  ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/department/get'

let put =
  ' https://s3ht8i0izf.execute-api.us-east-1.amazonaws.com/department/depput'

module.exports = { posturl, geturl, delurl, puturl, post, get, put }
