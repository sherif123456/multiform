import React from 'react';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import './Registration.css';
// import { Button } from "react-bootstrap";
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


function Registration() {



  const InitialValues = {
    firstname: '',
    middlename: '',
    lastname: '',
    age: '',
    email: '',
    phone: '',
    telephone: '',
  }

  const SignUpSchema = Yup.object().shape(
    {
      firstname: Yup.string()
        .min(5, 'Should be 5 character long')
        .max(15, 'should not exceed 15 characters')
        .required('Required'),

      lastname: Yup.string()
        .min(5, 'Should be 5 character long')
        .max(15, 'should not exceed 15 characters')
        .required('Required'),

      email: Yup.string()
        .email('invalid email address')
        .required('Required')
    }
  );

  let navigate = useNavigate();
  function handleClick() {
    navigate('/address')
  }



  return (

    <div className='img'>

      <section id="registration-page">
        <div className='crd_brd'>
          <div className='sm_bx'>
            <h1 style={{ color: "#6600cc", marginLeft: "3rem", position: "relative", top: "1rem" }}>Sign Up</h1>
          </div>
          <Formik
            initialValues={{ ...InitialValues }}

            validationSchema={SignUpSchema}
            onSubmit={handleClick()}
          >

            <Form class="signup-form" onSubmit={handleClick()}>

              <div class="form-body">
                <div class="row" style={{ marginTop: "10px" }}>
                  <div class="input-group">
                    <TextField className='tf1'
                      name='firstname'
                      label='FirstName'
                      variant="standard"
                      style={{ width: "200px" }} />
                  </div>
                  <div class="input-group">
                    <TextField
                      name='middlename'
                      label='MiddleName'
                      variant="standard"
                      style={{ width: "200px", marginRight: "3px" }} />
                  </div>
                  <div class="input-group">
                    <TextField
                      name='lastname'
                      label='LastName'
                      variant="standard"
                      style={{ width: "200px" }} />
                  </div>
                </div>

                <div class="row">

                  <div class="input-group">
                    <TextField
                      name='age'
                      label='Age'
                      variant="standard"
                      style={{ width: "200px", marginTop: "15px" }} />
                  </div>

                  <div class="input-group">
                    <TextField
                      name='email'
                      label='Email'
                      variant="standard"
                      style={{ width: "465px", marginTop: "15px" }} />
                  </div>

                </div>

                <div class="row">

                  <div class="input-group">
                    <TextField
                      name='phone'
                      label='Phone'
                      variant="standard"
                      style={{ width: "334px", marginTop: "15px" }} />
                  </div>

                  <div class="input-group">
                    <TextField
                      name='tele'
                      label='Tele Phone'
                      variant="standard"
                      style={{ width: "334px", marginTop: "15px" }} />
                  </div>

                </div>

                <div class="row" style={{ marginBottom: "30px" }}>

                  <div class="input-group">
                    <TextField
                      name='password'
                      label='Password'

                      variant="standard"
                      style={{ width: "334px", marginTop: "15px" }} />
                  </div>

                  <div class="input-group">
                    <TextField
                      name='confirmpassword'
                      label='Confirm Password'
                      variant="standard"
                      style={{ width: "334px", marginTop: "15px" }} />
                  </div>

                </div>

              </div>


            </Form>
          </Formik>

          <Button variant="contained" style={{ background: "darkblue", marginLeft: "41rem", height: "48px", width: "200px", fontSize: "20px", position: "relative", bottom: "3rem" }} onClick={handleClick}>Sign Up</Button>

        </div>
      </section>

    </div>


  );


}
export default Registration;