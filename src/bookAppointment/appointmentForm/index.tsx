import { Card, Box, styled, Button } from '@mui/material';
import { InputComponent, SelectComponent } from 'components';
const Container = styled(Card)(() => ({
  width: '100%',
}));

const ContainerForm = styled('div')(() => ({
  width: '100%',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const ContainerHeader = styled(Box)(() => ({
  width: '100%',
  background: '#01a998',
  color: '#ffffff',
  fontWeight: 800,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

const CustomButton = styled(Button)({
  backgroundColor: '#01a998',
  color: '#ffffff',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  fontWeight: 600,
  ':hover': {
    backgroundColor: '#01a998',
    color: '#ffffff',
  },
});

const AppointmentForm = () => {
  return (
        <>
          <Container variant='outlined'>
            <ContainerHeader>Get An Appointment</ContainerHeader>
          </Container>
          <ContainerForm>
            <SelectComponent
              name='How Can We Help ?'
              item={['Serious', 'Need some suggestion', 'Need some help']}
            />
            <InputComponent name='Name' />
            <InputComponent name='Phone number' />
            <InputComponent name='Email' />
            <InputComponent name='Date' />
            <CustomButton>Book Appointment</CustomButton>
          </ContainerForm>
          </>
  );
};

export default AppointmentForm;
