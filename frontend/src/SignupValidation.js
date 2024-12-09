function Validation (values){

  let errors ={}
  const email_pattern = /^[^\s@]+@[^@]+\.[^@]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (values.name === "") {
    errors.name = "Name should not be empty!";
  }else {
    errors.name= "";
  }
   
  if (values.phone === "") {
    errors.phone = "Phone NO. is mandatory";
  } else if (!phone_pattern.test(values.phone)) {
    errors.phone = "Invalid phone No. format";
  }else {
    errors.phone = "";
  }


  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Wrong password.";
  } else {
    errors.password = "";
  }
  return errors;

}
export default Validation;