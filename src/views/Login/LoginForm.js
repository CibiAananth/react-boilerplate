// import React from 'react';
// import PropTypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';
// // @material-ui/core
// import Button from 'components/Button/Button';
// import TextField from 'components/TextField/TextField';
// // core components
// import Typography from 'components/Typography/Typography';
// import { VSpacer } from 'components/Spacer/Spacer';
// // utils
// import isEmail from 'lib/regex/regex';

// const Form = ({ handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <Field
//       name="email"
//       label="Email address"
//       type="text"
//       placeholder="steven@company.com"
//       component={textField}
//     />
//     <Field
//       name="password"
//       label="Password"
//       type="password"
//       placeholder="* * * * *"
//       component={textField}
//     />
//     <VSpacer amount={25} />
//     <Button
//       type="submit"
//       onClick={handleSubmit}
//       font="normal"
//       color="rose"
//       fit
//       rect
//     >
//       Login
//     </Button>
//   </form>
// );

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'This is a required field';
//   } else if (!isEmail(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!values.password) {
//     errors.password = 'This is a required field';
//   }
//   return errors;
// };

// const textField = ({
//   name,
//   placeholder,
//   type,
//   label,
//   input,
//   meta: { touched, error },
// }) => (
//   <div>
//     <TextField
//       {...input}
//       id={name}
//       type={type}
//       label={label}
//       placeholder={placeholder}
//       error={!!(touched && error)}
//       margin="normal"
//       fullWidth
//       required
//       autoComplete={label}
//       variant="outlined"
//     />
//     {touched
//       && (error && (
//         <Typography size="xs" color="danger">
//           {error}
//         </Typography>
//       ))}
//   </div>
// );

// Form.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

// const LoginForm = reduxForm({
//   form: 'login',
//   validate,
// })(Form);

// export default LoginForm;
