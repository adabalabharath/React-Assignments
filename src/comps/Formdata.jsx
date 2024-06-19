import React, { useState } from "react";
import Details from "./Details";

const Formdata = () => {
  let [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false,
    gender: "",
  });

  const [details,setDetails]=useState(false)

  const handleChange=(e)=>{
    setDetails(false)
    const {name,value,type,checked}=e.target;
    setForm((prev)=>({...prev,[name]: type === "checkbox" ? checked : value}))
  }

  const handleSubmit=(e)=>{
   e.preventDefault();
   setDetails(true)

  }

  console.log(form)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange}/>
        </div>
        <div>
          <label>email</label>
          <input type="text" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange}/>
        </div>
        <div>
          <label>phNumber</label>
          <input type="text" name="phNumber" value={form.phNumber} onChange={handleChange}/>
        </div>
        <div>
          <label>country</label>
          <select value={form.country} onChange={handleChange} name='country'>
            <option value="">select an option</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Russia">Russia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
        </div>
        <div>
          <label>birthDate</label>
          <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange}/>
        </div>
        <div>
          <label>select married status</label>
          <input type="checkbox" name="marriageStatus" value={form.marriageStatus} onChange={handleChange}/>
        </div>

        <p>select gender</p>
        <div>
          <input type="radio" name="gender" value="male" onChange={handleChange}/>
          <label>Male </label>
          <input type="radio" name="gender" value="female" onChange={handleChange}/>
          <label>FeMale </label>
          <input type="radio" name="gender" value="other" onChange={handleChange}/>
          <label>other </label>
        </div>
        <label>Choose avatar</label>
        <div>
          <input type="file" name='avatar'/>
        </div>
        <button>submit</button>
      </form>
      {details && <Details data={form}/>}
    </div>
  );
};

export default Formdata;
