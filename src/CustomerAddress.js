import React from 'react';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import './CustomerAddress.css';
// import { Button } from "react-bootstrap";
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


function CustomerAddress() {



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
    navigate('/payment')
  }



  return (

    <div className='image'>
 
      <section id="address-page">
        <div className='crd_brd2'>
          <div className='sm_bx'>
            <h2 style={{ color: "#6600cc", marginLeft: "3rem", position: "relative", top: "1rem" }}>Address Details</h2>
          </div>
          <Formik
            initialValues={{ ...InitialValues }}

            validationSchema={SignUpSchema}
            onSubmit={handleClick()}
          >

            <Form class="address-form" onSubmit={handleClick()}>

              <div class="body">
                
              <div class="row" >
                  <div class="input-group" style={{marginTop:"2rem"}}>
                    <TextField className='tf1'
                      name='firstname'
                      label='FirstName'
                      variant="outlined"
                      style={{ width: "175px" }} />
                  </div>
                  <div class="input-group" >
                    <TextField className='tf1'
                      name='firstname'
                      label='LastName'
                      variant="outlined"
                      style={{ width: "175px" }} />
                  </div>
              </div>
                  <div class="input-group" style={{marginTop:"1.5rem"}}>
                    <TextField
                      name='middlename'
                      label='Address'
                      variant="outlined"
                      multiline
                      rows={5}
                      style={{ width: "400px"  }} />
                  </div>

                  <div class="input-group" style={{marginTop:"1.5rem"}}>
                    <TextField
                      name='lastname'
                      label='ZIP or postal code (optional)'
                      variant="outlined"
                      style={{ width: "400px" }} />
                  </div>

                  <div class="input-group" style={{marginTop:"1.5rem"}}>
                    <TextField
                      name='email'
                      label='Email'
                      variant="outlined"
                      style={{ width: "400px" }} />
                  </div>

                  <div class="input-group" style={{marginTop:"1.5rem"}}>
                    <TextField
                      name='phone'
                      label='Phone'
                      variant="outlined"
                      style={{ width: "400px"}} />
                  </div>

              </div>


            </Form>
          </Formik>
          <Button variant="contained" style={{marginTop:"1rem",marginLeft:"31rem"}}  onClick={handleClick}>Next</Button>
        </div>
      
      </section>

    </div>


  );


}
export default CustomerAddress;