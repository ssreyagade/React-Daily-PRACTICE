import React, { useState } from "react";

const FormHandling = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
  });

  const [records, setRecords] = useState([]);

  const getData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current data into records array
    setRecords([...records, data]);

    // Clear form
    setData({
      fname: "",
      lname: "",
      phone: "",
      email: "",
    });
  };

  return (
    <>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="Enter first name"
          value={data.fname}
          onChange={getData}
        />

        <input
          type="text"
          name="lname"
          placeholder="Enter last name"
          value={data.lname}
          onChange={getData}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter phone"
          value={data.phone}
          onChange={getData}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={getData}
        />

        <input type="submit" value="Submit" />
      </form>

      <hr />

      <h2>Submitted Data</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FormHandling;
