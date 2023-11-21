import React, { useRef, useState } from "react";
import { Button, Col, Form, FormText, Row } from "react-bootstrap";
import TableData from "./TableData";
// import { useNavigate } from 'react-router'

export default function Add() {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Info, setInfo] = useState([]);
  const [Error, setError] = useState(null);
  const nameRef = useRef();

  // const navigate=useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors(UserName, Email, Phone, Address)) {
    } else {
      // navigate("/")
      setUserName("");
      setEmail("");
      setPhone("");
      setAddress("");
      console.log({ UserName, Email, Phone, Address });
      const d={ UserName, Email, Phone, Address };
      setInfo([...Info,d])
      nameRef.current.focus();
    }
  };

  const hasErrors = (UserName, Email, Phone, Address) => {
    const errors = {};
    if (UserName.length < 4) {
      errors.UserName = "your name must be more than 4 char";
    }

    if (
      !Email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      errors.Email = "your email must be vaild";
    }

    if (Phone.length < 8) {
      errors.Phone = "your phone must be more than 8 number";
    }

    if (Address.length < 5) {
      errors.Address = "your address must be more than 5 char";
    }

    setError(errors);
    return Object.keys(errors).length;
  };

  return (
    <>
      <div className=" ms-5 d-flex justify-content-between">
        <Form onSubmit={handleSubmit} noValidate className="w-50">
          <Row className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold text-warning">
                User Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={UserName}
                onChange={handleUserName}
                ref={nameRef}
              />
              {Error?.UserName && (
                <FormText className="text-danger">{Error?.UserName}</FormText>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold text-warning">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={Email}
                onChange={handleEmail}
              />
              {Error?.Email && (
                <FormText className="text-danger">{Error?.Email}</FormText>
              )}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className="fw-bold text-warning">Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                value={Phone}
                onChange={handlePhone}
              />
              {Error?.Phone && (
                <FormText className="text-danger">{Error?.Phone}</FormText>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="fw-bold text-warning">Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={Address}
                onChange={handleAddress}
              />
              {Error?.Address && (
                <FormText className="text-danger">{Error?.Address}</FormText>
              )}
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="w-25">
            {" "}
            Add{" "}
          </Button>
        </Form>

         <TableData data={Info}/>

        {/* <table className="table table-stripped w-50 mx-5" >
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{}</td>
                    </tr>
                    </tbody>
                </table> */}
      </div>
    </>
  );
}
