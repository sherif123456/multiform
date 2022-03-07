import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import './Payment.css';
import Card from "../src/image/Card.png";
import PayPal from "../src/image/paypal.png";
import Amazon from "../src/image/Amazon.png";



class PaymentDetails extends React.Component {

  constructor() {
    super()
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
      show: false,

    };



  }

  showform() {
    this.setState({
      show: true
    });
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div className='bx'>

        <button className="btn btn-info">Back</button>

        <div>
          <p style={{ fontSize: "30px", padding: "2rem",color:"white" }}>
            Choose Payment Method
          </p>
        </div>
        <div>
          <Button className='Card_btn1' onClick={() => this.showform()}>
            <img className="img_2" alt="img" src={Card} />
            <p style={{ color: "black" }}>Pay with credit card/Debit card</p></Button>

          <Button className='Card_btn2'>
            <img className="img_3" alt="img" src={PayPal} />
            <p style={{ color: "black" }}>Pay with PayPal</p></Button>
          <Button className='Card_btn3'>
            <img className="img_4" alt="img" src={Amazon} />
            <p style={{ color: "black" }}>Pay with Amazon Payments</p></Button>
        </div>
        <br></br>
        <hr></hr>

        {this.state.show ?
          <div >
            <div>
              <p style={{ fontSize: "30px", padding: "4rem",color:"white"}}>
                Credit Card / Debit Card Payment
                <div style={{ fontSize: "18px",color:"white" }}>
                  <b>Note:</b> This is the Secured Payment Gateway for Online Purchase.We never save your Card Info for further.
                </div>
              </p>
            </div>
            <div className='col-6'>
              <Cards className="card" style={{ margintop: "3rem" }}
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </div>

            <form>

              <div>
                <p>
                  Debit Card Info
                </p>
              </div>
              <div className='credit_form'>
                <div className="form-group">
                  <input
                    style={{ width: "400px", fontSize: "20px" }}
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <input
                    style={{ width: "400px", fontSize: "20px" }}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <input
                    style={{ width: "400px", fontSize: "20px" }}
                    type="text"
                    name="expiry"
                    pattern="\d\d/\d\d"
                    className="form-control"
                    placeholder="Expiry"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <input
                    style={{ width: "400px", fontSize: "20px" }}
                    type="text"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary btn-block">Proceed</button>
                </div>
              </div>
            </form>

          </div>
          : null
        }

      </div>
    );
  }
}

export default PaymentDetails;
