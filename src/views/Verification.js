import React, {useState} from "react";
import { Container, Button, Modal, ModalBody, ModalHeader } from "shards-react";

export default function Verification(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true); console.log('handleShow') };
  
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
        <ModalHeader>Header</ModalHeader>
        <ModalBody>👋 Hello there!</ModalBody>
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