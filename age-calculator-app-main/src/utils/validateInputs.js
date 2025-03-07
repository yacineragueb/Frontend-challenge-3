function validateInputs(obj, setErrors) {
  let newErrors = {};
  let date = new Date();

  if (!obj.day) newErrors.day = "This field is required";
  if (!obj.month) newErrors.month = "This field is required";
  if (!obj.year) newErrors.year = "This field is required";


  if (obj.day && (obj.day < 1 || obj.day > 31))
    newErrors.day = "Must be a valid day";  
  if (obj.month && (obj.month < 1 || obj.month > 12))
    newErrors.month = "Must be a valid month";
  if (obj.year && obj.year > date.getFullYear())
    newErrors.year = "Must be in the past";

  if (Object.keys(newErrors).length > 0) {
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return;
  }

  return true;
}

export default validateInputs;
