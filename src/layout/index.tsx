import Header from 'layout/header';
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
