import { ReactNode } from 'react';
import Homepage from '../homepage';
import BookAppointment from '../bookAppointment';
import ContactUs from '../contactUs';
import DoctorDetails from '../doctorDetails';
import { routeName } from 'constant';

type IRoute = {
  pathName: string,
  component: JSX.Element | JSX.Element[] | ReactNode
}[]

export const routes: IRoute = [
  {
    pathName: routeName.HOMEPAGE,
    component: <Homepage />,
  },
  {
    pathName: routeName.BOOKAPPOINTMENT,
    component: <BookAppointment />,
  },
  {
    pathName: routeName.CONTACTUS,
    component: <ContactUs />,
  },

  {
    pathName: routeName.DOCTORDETAILS,
    component: <DoctorDetails />,
  }
];