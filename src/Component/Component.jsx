import React, { useState } from 'react'
import './Component.css'

const Component = () => {

   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
   })

   const [errors, setErrors] = useState({})
      const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validate = () => {
    let newErrors = {}
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name cannot be empty"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name cannot be empty"
    }
     if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }
      if (!formData.password) {
      newErrors.password = "Password cannot be empty";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

    
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully");
      console.log("Form Data:", formData);
    }
  };

  return (
    <>
      <main className='main'>
        <section className="page-info">
            <h1>Learn to code by <br className="hidden" /> watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </section>
        <section className="formInfo">
            <button className='firstBtn'><span className='spanBtn'>Try it free</span> 7 days then <br id='hidden' /> $20/mo. thereafter</button>
            <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="First Name"
    className="firstInput"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
  />
  {errors.firstName && <p className="error">{errors.firstName}</p>}

  <input
    type="text"
    placeholder="Last Name"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
  />
  {errors.lastName && <p className="error">{errors.lastName}</p>}

  <input
    type="email"
    placeholder="Email Address"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
  {errors.email && <p className="error">{errors.email}</p>}

  <input
    type="password"
    placeholder="Password"
    name="password"
    value={formData.password}
    onChange={handleChange}
  />
  {errors.password && <p className="error">{errors.password}</p>}

  <button type="submit" className="secondBtn">
    Claim your free trial
  </button>
  <p className="formParagraph">
    By clicking the button, you are agreeing to our <span>Terms and services</span>
  </p>
</form>

        </section>
      </main>
    </>
  )
}

export default Component
