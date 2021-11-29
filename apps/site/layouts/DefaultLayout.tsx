import { Container } from '@mui/material';
import Footer from '../components/shared/general/Footer';
import Header from '../components/shared/general/Header';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
