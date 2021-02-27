import React, {useState} from "react";
import { Container, Button, Modal, ModalBody, Nav, NavItem, NavLink } from "shards-react";

function Step1(props) {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <i className="material-icons" style={{fontSize: 80, color: '#f00'}}>info</i>
        <h5>Please continue on mobile</h5>
        <p>To avoid problems with the quanlity of your <br/>verification, please continue on mobile</p>
      </div>
      <div style={{textAlign: 'right'}}>
        <Button style={{width: 100}} onClick={props.nextStep}>Continue</Button>
      </div>
    </div>
  )
}

function QRCodeComponent(props) {
  return (
    <div>
      QR Code
    </div>
  )
} 

function EmailComponent(props) {
  return (
    <div>
      Email
    </div>
  )
} 

function SMSComponent(props) {
  return (
    <div>
      SMS
    </div>
  )
} 

function Step2(props) {
  const [tab, setTab] = useState(1);  
  const onClickQRCode = () => {
    setTab(1);
  }

  const onClickEmail = () => {
    setTab(2);    
  }

  const onClickSMS = () => {
    setTab(3);    
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>        
        <h5>Choose your method to continue on <br/>mobile</h5>
        <div>
          <Nav justified>
            <NavItem onClick={onClickQRCode}>
              <NavLink href="#" style={{color: tab === 1 ? '#007bff' : 'gray', textDecoration: tab === 1 ? 'underline' : 'none'}}>QR Code</NavLink>
            </NavItem>
            <NavItem onClick={onClickEmail}>
              <NavLink href="#" style={{color: tab === 2 ? '#007bff' : 'gray', textDecoration: tab === 2 ? 'underline' : 'none'}}>Email</NavLink>
            </NavItem>
            <NavItem onClick={onClickSMS}>
              <NavLink href="#" style={{color: tab === 3 ? '#007bff' : 'gray', textDecoration: tab === 3 ? 'underline' : 'none'}}>SMS</NavLink>
            </NavItem>          
          </Nav>
          <div>
            { 
              tab == 1 && <QRCodeComponent />
            }

            { 
              tab == 2 && <EmailComponent />
            }

            { 
              tab == 3 && <SMSComponent />
            }
          </div>
        </div>
 
      </div>      
    </div>
  )
}

export default function Verification(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true); console.log('handleShow') };
  const [step, setStep] = useState(1);

  const nextStep1 = () => {
    console.log('nextStep1');
    setStep(2);
  }
  
  return (
    <div>
      <Container fluid className="main-content-container px-4 pb-4">
        <div style={{display: 'flex', height: 'calc(90vh)'}}>
          <div className="error__content">
            <h3>Verify your identity now</h3>
            <h5>You can verify your identity for Anjmacc Ent by <br/>the verification button below</h5>        
            <Button style={{width: 200}} onClick={handleShow}>Verify Me</Button>
          </div>
        </div>
      </Container>
      <Modal open={show} toggle={handleClose}>        
        <ModalBody>
          { step == 1 &&
            <Step1 nextStep={nextStep1}/>
          }
          { step == 2 &&
            <Step2/>
          }
        </ModalBody>
      </Modal>
    </div>
  )
}


// export default class Verification extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     console.log("Toggle");
//     this.setState({
//       open: !this.state.open
//     });
//   }

//   render() {
//     const { open } = this.state;
//     return (
//       <div>
//        <Container fluid className="main-content-container px-4 pb-4">
//          <div style={{display: 'flex', height: 'calc(90vh)'}}>
//            <div className="error__content">
//              <h3>Verify your identity now</h3>
//              <h5>You can verify your identity for Anjmacc Ent by <br/>the verification button below</h5>        
//              <Button style={{width: 200}} onClick={this.toggle}>Verify Me</Button>
//            </div>
//          </div>
//        </Container>
//         <Modal open={open} toggle={this.toggle}>
//           <ModalHeader>Header</ModalHeader>
//           <ModalBody>👋 Hello there!</ModalBody>
//         </Modal>
//       </div>
//     );
//   }
// }