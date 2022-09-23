export function validate(fn) {
   let regex = /./;
   let errors = [];
   switch (fn.type) {
      case "name":
         regex = /[a-zA-Z]/;
         return regex.test(fn.value);

      case "email":
         regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
         if (!regex.test(fn.value)) return false;
         else return true;

      case "password":
         if (fn.value.length < 8)
            errors = [...errors, "The minimum password limit is 8 characters."];

         //***********************************

         regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/; // Combination of capital & small letters, digits, and special character at least 1 character for each.
         if (!regex.test(fn.value))
            errors = [...errors, "Combination of capital & small letters, digits, and special character at least 1 character for each."];

         return errors;

      default:
         return [];
   }
}
