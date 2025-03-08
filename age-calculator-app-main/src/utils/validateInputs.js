import isValidDate from "./isValidDate";

function validateInputs(obj, setErrors) {
  
  if (isNaN(obj.day) || isNaN(obj.month) || isNaN(obj.year)) {
    return false;
  }

  let newErrors = {};
  let date = new Date();

  if (!obj.day) newErrors.day = "This field is required";
  if (!obj.month) newErrors.month = "This field is required";
  if (!obj.year) newErrors.year = "This field is required";

  let day = parseInt(obj.day);
  let month = parseInt(obj.month);
  let year = parseInt(obj.year);

  if (obj.day && (day < 1 || day > 31)) {
    newErrors.day = "Must be a valid day";
  } else if(day && month && year) {
    let ValidDate = isValidDate(day, month, year);

    if (!ValidDate) {
      newErrors.day = "Must be a valid date";
      newErrors.month = true;
      newErrors.year = true;
    } else {
      newErrors = {};
    }
  }
  if (obj.month && (month < 1 || month > 12))
    newErrors.month = "Must be a valid month";
  if (obj.year && year > date.getFullYear())
    newErrors.year = "Must be in the past";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;;
}

export default validateInputs;
