import React, { Component } from "react";
import { Row, Col, Label, Button } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <h1 className="contact-title">Send Us Your Feedback</h1>
        <div className="feedback-form">
          <LocalForm
            model="feedback"
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <Row className="form-group">
              <Label htmlFor="firstname" md={2} sm={3} xs={3}>
                First Name
              </Label>
              <Col md={8} sm={8} xs={8}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(10),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be two characters or more",
                    maxLength: "Must be 10 characters or less",
                  }}
                ></Errors>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastName" md={2} sm={3} xs={3}>
                Last Name
              </Label>
              <Col md={8} sm={8} xs={8}>
                <Control.text
                  model=".lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(10),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be 2 characters or more",
                    maxLength: "Must be 10 characters or less",
                  }}
                ></Errors>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="mobnum" md={2} sm={3} xs={3}>
                Mobile No.
              </Label>
              <Col md={8} sm={8} xs={8}>
                <Control.text
                  model=".mobnum"
                  id="mobnum"
                  name="mobnum"
                  placeholder="Mobile Number"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".mobnum"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be 10 numbers long",
                    maxLength: "Must be 10 numbers long",
                    isNumber: "Must be a Number",
                  }}
                ></Errors>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2} sm={3} xs={3}>
                Email
              </Label>
              <Col md={8} sm={8} xs={8}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
              </Col>
              <Errors
                className="text-danger"
                model=".email"
                show="touched"
                messages={{
                  required: "Required ",
                  validEmail: "Invalid Email Address",
                }}
              ></Errors>
            </Row>
            <Row className="form-group">
              <Col
                md={{ size: 5, offset: 1 }}
                sm={{ size: 6, offset: 2 }}
                xs={{ size: 7, offset: 3 }}
              >
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      className="form-check-input"
                    />{" "}
                    <strong className="contactU">May we contact you? </strong>
                  </Label>
                </div>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="message" md={2} sm={3} xs={3}>
                Your Feedback
              </Label>
              <Col md={8} sm={8} xs={8}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="8"
                  className="form-control"
                  placeholder="Write your Feedback "
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 1 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default ContactUs;
