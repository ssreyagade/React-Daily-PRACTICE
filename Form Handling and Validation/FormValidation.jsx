import React, { useState } from "react";

const FormValidation = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
  });

  const [frName, setFrName] = useState("");
  const [lsName, setLsName] = useState("");
  const [ph, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const [fnError, setFnError] = useState("");
  const [lnError, setLnError] = useState("");
  const [phError, setPhError] = useState("");
  const [mailError, setMailError] = useState("");

  const validate = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = true;
    if (frName === "") {
      setFnError("Please enter first name");
      error = false;
    } else {
      setFnError("");
    }

    if (lsName === "") {
      setLnError("Please enter last name");
      error = false;
    } else {
      setLnError("");
    }

    if (ph === "") {
      setPhError("Please enter phone number");
      error = false;
    } else {
      setPhError("");
    }

    if (mail === "") {
      setMailError("Please enter the mail id");
      error = false;
    } else {
      setMailError("");
    }

    if (emailPattern.test(mail) === false) {
      setMailError("Please enter a valid mail id");
      error = false;
    } else {
      setMailError("");
    }
    return error;
  };

  const submitData = (e) => {
    e.preventDefault();
    if (validate() === true) {
      setData({ fname: frName, lname: lsName, phone: ph, email: mail });
      setFrName("");
      setLsName("");
      setPhone("");
      setMail("");
    }
  };

  console.log(data);
  return (
    <>
      <h1 className="text-center text-dark bg-warning p-2">
        Form Handling in ReactJS
      </h1>
      <form
        action=""
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Enter your first name"
                className="form-control fw-bold"
                name="fname"
                // value={data.fname}
                value={frName}
                onChange={(e) => {
                  setFrName(e.target.value);
                }}
              />
              {fnError ? <p className="text-danger">{fnError}</p> : null}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Enter your last name"
                name="lname"
                className="form-control fw-bold"
                // value={data.lname}
                value={lsName}
                onChange={(e) => {
                  setLsName(e.target.value);
                }}
              />
              {lnError ? <p className="text-danger">{lnError}</p> : null}
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control fw-bold"
                name="phone"
                placeholder="Enter your phone "
                // value={data.phone}
                value={ph}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {phError ? <p className="text-danger">{phError}</p> : null}
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control fw-bold"
                name="email"
                placeholder="Enter your Email Id"
                // value={data.email}
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              {mailError ? <p className="text-danger">{mailError}</p> : null}
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6">
              <button className="btn btn-success">Submit Data</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-danger">Reset Form</button>
            </div>
          </div>
        </div>
      </form>
      <h2>First Name: {data.fname}</h2>
      <h2>Last Name: {data.lname}</h2>
      <h2>Phone: {data.phone}</h2>
      <h2>Email: {data.email}</h2>
    </>
  );
};

export default FormValidation;
