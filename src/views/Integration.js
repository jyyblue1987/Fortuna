import React from "react";
import { Container, Button, Card, CardBody, InputGroup, FormInput, InputGroupAddon, InputGroupText, Row, Col  } from "shards-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

const Integration = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div style={{display: 'flex'}}>
      <div style={{margin: 'auto', width: '80%', marginTop: 50}}>        
        <h4><b>Get Started in</b></h4>
        <h5>Sandbox mode</h5> 
        <p style={{marginTop: 25}}>This is your sandbox environment with your sandbox API keys, Please use publishable API key for your client side integrations (Mobile App or Website) and your secrent API key for your backend</p>

        <div style={{marginBottom: 10}}>
          <span><b>Sandbox mode</b></span>
          <span style={{color: '#999', marginLeft: 20}}><b>(50 verification | 30 days left)</b></span>
          <i class="material-icons" style={{marginLeft: 10, color: '#00f'}}>stop_circle</i>
        </div>
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

        <div style={{marginTop: 20, marginBottom: 20}}>
          <span><b>Chooose your favorite client-side integration</b></span>                    
        </div>

        <div>
          <Row className="mb-3 mt-2">
            <Col>
              <Button size="sm" theme="primary" style={{width:'100%'}}>
                Web
              </Button>
            </Col>
            <Col>
              <Button size="sm" outline theme="primary" style={{width:'100%'}}>
                iOS
              </Button>
            </Col>
            <Col>
              <Button size="sm" outline theme="primary" style={{width:'100%'}}>
                Android
              </Button>
            </Col>
            <Col>
              <Button size="sm" outline theme="primary" style={{width:'100%'}}>
                React Native
              </Button>
            </Col>
            <Col>
              <Button size="sm" outline theme="primary" style={{width:'100%'}}>
                Other
              </Button>           
            </Col>          
          </Row>
        </div>

        <div style={{marginTop: 40, marginBottom: 20}}>
          <span><b>Copy and past your snippet</b></span>                    
        </div>

        <Card>
          <CardBody className="pb-3" style={{padding: 30}}>
            <ReactQuill className="add-new-post__editor mb-1" />
          </CardBody>
        </Card>

        <div style={{marginTop: 20, marginBottom: 40}}>
          <span><b>Check out our <a href="#">documentation</a></b></span>                    
        </div>

        <Card>
          <CardBody className="pb-3" style={{padding: 30}}>
            <div>
              <span style={{fontSize: 20}}>Your personal verification link</span>                            
            </div>
            <div style={{marginTop: 10}}>
              <h6 style={{marginBottom: 2}}>Instead of a client side integration, you can also use this personal link to let users complete a verification, Just copy and open it in your browser to try it out yourslef.</h6>
            </div>

            <div style={{marginTop: 20}}>
              <span style={{fontSize: 17}}>Personal Link</span>                            
            </div>
            <InputGroup className="mb-3">
              <FormInput value="verify passbass.com/an|macc" onChange={() => {}} />
              <InputGroupAddon type="append">
                <InputGroupText>Copy</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
        </Card>
        <div>
          <Button size="sm" theme="primary" style={{marginTop: 20, width:120}}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default Integration;
