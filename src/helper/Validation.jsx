
export function validateSchema(schema, data) {
  const errors = {};

  for (const field in schema) {
    const value = data[field];
    const rules = schema[field];

    for (const rule of rules) {
      const { type, message, value: ruleValue } = rule;

      switch (type) {
        case "required":
          if (!value?.toString().trim()) {
            errors[field] = message || "This field is required";
          }
          break;

        case "email":
          if (
            value &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ) {
            errors[field] = message || "Enter a valid email address";
          }
          break;

        case "phone":
          if (value && !/^\d{10}$/.test(value)) {
            errors[field] = message || "Phone number must be 10 digits";
          }
          break;

        case "minLength":
          if (value && value.length < ruleValue) {
            errors[field] = message || `Must be at least ${ruleValue} characters`;
          }
          break;

        case "maxLength":
          if (value && value.length > ruleValue) {
            errors[field] = message || `Must not exceed ${ruleValue} characters`;
          }
          break;

        case "pattern":
          if (value && !ruleValue.test(value)) {
            errors[field] = message || "Invalid format";
          }
          break;

        default:
          break;
      }

      if (errors[field]) break; 
    }
  }

  return errors;
}
