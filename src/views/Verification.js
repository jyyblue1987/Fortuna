import React from "react";
import { Container, Button } from "shards-react";

const Verification = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div style={{display: 'flex', height: 'calc(80vh)'}}>
      <div className="error__content">
        <h3>Verify your identity now</h3>
        <h5>You can verify your identity for Anjmacc Ent by <br/>the verification button below</h5>        
        <Button style={{width: 200}}>Verify Me</Button>
      </div>
    </div>
  </Container>
);

export default Verification;
