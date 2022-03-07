import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import './Login.css';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import image from "../src/image/image.webp";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Features/Slice';

const InitialValues = {
  username: '',
    password: '',
};

function Login() {
const [ Values,setInitialValues] = useState(InitialValues);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInitialValues({
    ...Values,
    [name]: value,
  });
};


const dispatch = useDispatch();

const handlesave = async function(e){
  const url = 'https://webhook.site/835107aa-ba72-48ba-ab21-dccbcb9e3c99';

  e.preventDefault();

  if (Values.username && Values.password.length>0) {

    const content= dispatch(login({
        Username: Values.username,
        Password: Values.password,
        loggedin: true
     }))
      try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        });
        console.log(response);
    } catch(error){
        console.log(error);
         alert('Sorry unable to update the segment');
        //toast.error("Sorry unable to update the segment")
    }
    //toast.success("Succesfully saved!!");
} else {
     alert('Please enter segment name and select schemas to add');
   // toast.warning("Please enter segment name and select schemas to add")
}
}
 
  
  let navigate = useNavigate();
  function handleClick() {
    navigate('/registration')
  }

  function handleClick1(){
    navigate('/address')
  }
  


  const SignUpSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(5, 'Should be 5 character long')
        .max(15, 'should not exceed 15 characters')
        .required('Required'),


      email: Yup.string()
        .email('invalid email address')
        .required('Required')
    }
  );

  return (

    <div className='img1'>
      <div className="flex-container">
        <div className='card_brd'>

          <div className='card_brd1'>

            <Formik
              initialValues={{ ...InitialValues }}

              validationSchema={SignUpSchema}
             
            >
              <Form  onSubmit={(e)=> handlesave(e)}>
                <div >

                  <div >
                    <h1 style={{ color: "#5D3FD3", textAlign: "center" }}>Login</h1>
                  </div>
                  <hr style={{color:"#2E0854"}}></hr>
                  <div style={{ position: "Relative", right: "2rem" }}>
                    <div class="input-group">
                      <TextField className='tf1'
                        name='username'
                        label='UserName'
                        variant="outlined"
                        value={Values.username}
                        style={{ width: "395px", marginTop: "2rem", borderColor: "#5D3FD3" }}
                        onChange={handleInputChange} />
                    </div >
                    <div class="input-group">
                      <TextField
                        name='password'
                        label='Password'
                        variant="outlined"
                        value={Values.password}
                        style={{ width: "395px", marginTop: "2rem" }}
                        onChange={handleInputChange} />
                    </div>
                    <Button
                      onClick={handlesave}
                      variant="contained"
                      style={{ width: "395px", marginTop: "2rem", marginLeft: "2.2rem", height: "50px", background: "#7F00FF" }} >Login</Button>
                    <div style={{ marginTop: "1rem", marginLeft: "11.5rem" }}>
                    <p>Or Login with</p>
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        style={{ width: "180px", marginTop: "0.5rem", marginLeft: "2.2rem", height: "50px", borderColor: "darkblue", color: "darkblue" }}>facebook</Button>
                      <Button
                        variant="outlined"
                        style={{
                          width: "180px", marginTop: "0.5rem", position: "relative", left: "33px", height: "50px",
                          borderColor: "orange", color: "orange"
                        }}>Gmail</Button>
                    </div>
                    <div style={{ marginTop: "1rem", marginLeft: "2.2rem" }}>
                      <p>Does not have an account yet?<span><Button variant="text" style={{color:"darkblue"}} onClick={handleClick}>Register</Button></span></p>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="flex-item-right">
            <img className="img2" alt="img" src={image} />
          </div>
        </div>
      </div>
    </div>


  );


}
export default Login;