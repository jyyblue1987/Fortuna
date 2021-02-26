import React from "react";
import { Container, Button, Card, CardBody, InputGroup, FormInput, InputGroupAddon, InputGroupText  } from "shards-react";

const Integration = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div style={{display: 'flex'}}>
      <div style={{margin: 'auto', width: '80%', marginTop: 50}}>        
        <h4><b>Get Started in</b></h4>
        <h5>Sandbox mode</h5> 
        <p style={{marginTop: 25}}>This is your sandbox environment with your sandbox API keys, Please use publishable API key for your client side integrations (Mobile App or Website) and your secrent API key for your backend</p>

        <p style={{marginBottom: 10}}>
          <span><b>Sandbox mode</b></span>
          <span style={{color: '#999', marginLeft: 20}}><b>(50 verification | 30 days left)</b></span>
          <i class="material-icons" style={{marginLeft: 10, color: '#00f'}}>stop_circle</i>
        </p>
        <Card>
          <CardBody className="pb-3" style={{padding: 30}}>
            <div>
              <span style={{fontSize: 20}}>Your Sandbox Keys</span>              
              <span style={{float: 'right', marginTop: 4}}>SEE DOCUMENTATION ></span>
            </div>
            <div style={{marginTop: 10}}>
              <h6 style={{marginBottom: 2}}>Publishable API key</h6>
            </div>
            <InputGroup className="mb-3">
              <FormInput value="ZLsGA9F4llopYR2lVsCWbk7lrlWeRAGJJDwPXdKTBY" onChange={() => {}} />
              <InputGroupAddon type="append">
                <InputGroupText>Copy</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            <div style={{marginTop: 10}}>
              <h6 style={{marginBottom: 2}}>Secret API key</h6>
            </div>
            <InputGroup className="mb-3">
              <FormInput type="password" value="ZLsGA9F4llopYR2lVsCWbk7lrlWeRAGJJDwPXdKTBY" onChange={() => {}} />
              <InputGroupAddon type="append">
                <InputGroupText>Copy</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

export default Integration;
