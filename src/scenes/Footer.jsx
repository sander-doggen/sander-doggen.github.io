import SocialMediaIcons from "../components/SocialMediaIcons";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white my-3 py-3' style={{ backgroundColor: '#0a4275' }}>
         
            <section className=''>
             <SocialMediaIcons/>
            </section>
          
    
          <div className='text-center p-3'>
            © 2020 Copyright: <strong>Sander Doggen</strong>
            
          </div>
        </MDBFooter>
      );
};

export default Footer;