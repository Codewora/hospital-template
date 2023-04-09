import { Fragment } from 'react';
import { styled, Button } from '@mui/material';

const PatientLogin = styled(Button)<any>(({ margin }) => ({
  backgroundColor: 'transparent',
  border: '2px solid #dfdfdf',
  color: '#01a998',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  marginLeft: margin ?? '20px',
  ':hover': {
    border: '2px solid #01a998',
    backgroundColor: '#01a998',
    color: '#ffffff',
  },
}));

const DoctorLogin = styled(Button)<any>(({ margin }) => ({
  backgroundColor: '#01a998',
  border: '2px solid #01a998',
  color: '#ffffff',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  marginLeft: margin ?? '20px',
  ':hover': {
    border: '2px solid #dfdfdf',
    backgroundColor: '#transparent',
    color: '#01a998',
  },
}));

type ILoginButton = {
  margin?: string | undefined;
};

const LoginButton = ({ margin }: ILoginButton) => {
  return (
    <Fragment>
      <PatientLogin margin={margin}>Login as Patient</PatientLogin>
      <DoctorLogin margin={margin}>Login as Doctor</DoctorLogin>
    </Fragment>
  );
};

export default LoginButton;
