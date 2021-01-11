import Topbar from '../components/Topbar';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <PageContainer>
        <Header />
      </PageContainer>
    </>
  );
};

export default Home;
