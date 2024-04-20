  import React, { useRef, useState } from "react";
  import style from "../Form.module.css";
  import ShowForm from "./ShowForm";
  
  const Form = () => {
    let [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phNumber: "",
      country: "",
      birthDate: "",
      avatar: "",
      marriageStatus: false, // default
      gender: "",
    });



  let [display,setDisplay]=useState(false)


    const handle = (event) => {
      const { name, value, checked } = event.target;
      console.log(event.target)
      setForm((prev) => ({
        ...prev,
        [name]: value,
        marriageStatus:checked
      }));
    
    };

    const handleSubmit=(event)=>{
    event.preventDefault();
    setDisplay(true)
    
  }
    

    return (
  <div className={style.con}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
        <div className={style.names}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="first name"
              onChange={handle}
              name="firstName"
              value={form.firstName}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="last name"
              onChange={handle}
              name="lastName"
              value={form.lastName}
            />
          </div>
        </div>

        <div className={style.email}>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            onChange={handle}
            name="email"
            value={form.email}
          />
        </div>

        <div className={style.email}>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={handle}
            name="password"
            value={form.password}
          />
        </div>

        <div className={style.phn}>
          <div>
            <label>Phone</label>
            <input
              type="number"
              placeholder="mobile number"
              onChange={handle}
              name="phNumber"
              value={form.phNumber}
            />
          </div>
          <div>
            <label>country</label>
            <select onChange={handle} name="country" value={form.country}>
              <option value="select">select an option</option>
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
        </div>

        <div className={style.dob}>
          <div>
            <label>BirthDate</label>
            <input
              type="date"
              onChange={handle}
              name="birthDate"
              value={form.birthDate}
            />
          </div>
          <div>
            <label>Choose Avatar</label>
            <input
              type="file"
              onChange={handle}
              name="avatar"
              value={form.avatar}
            />
          </div>
        </div>

        <div className={style.marriage}>
          <div>
            <p>select if married</p>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={handle}
              name="marriageStatus"
              checked={form.marriageStatus}
            />
            <p>Marriage Status</p>
          </div>
        </div>

        <div className={style.gender}>
          <div>
            <p>select gender</p>
          </div>

          <div>
            <input type="checkbox" onChange={handle} name="gender" value="male" />
            <p>male</p>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={handle}
              name="gender"
              value="female"
            />
            <p>female</p>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={handle}
              name="gender"
              value="other"
            />
            <p>other</p>
          </div>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
        </form>
 </div>
        <div className={style.show}>
        {display && <ShowForm form={form}/>}      
        </div>
        </div>

     

    );
  };

  export default Form;
