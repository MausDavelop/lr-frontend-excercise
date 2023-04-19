import Navbar from '../Navbar/Navbar';
import { PageProps } from './Page.props';

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Page;
