import Header from 'layout/headerSecondary';
import Footer from 'layout/footer';

const Layout = ({ children }: any) => {
  
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
