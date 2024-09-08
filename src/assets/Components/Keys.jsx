import React from 'react';
import "../../index.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Keys(props) {
  function delete_item()
  {
    props.DELETE_ITEM(props.publicKey);
  }
  return (
    <div style={{padding: '1rem'}}>
      
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <div style={{display: 'flex',  justifyContent: 'space-between'}}>
        <h4 style={{padding: '1.2rem' , paddingBottom: '0rem'}}>Public Key</h4>
        <FontAwesomeIcon onClick={delete_item} icon={faTrash} style = {{padding: '1.2rem', cursor:'pointer'}} />
        </div>
        
        <Accordion.Header>{props.publicKey}</Accordion.Header>
        <Accordion.Body>
        <h4>Private Key</h4>
          {props.privateKey}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

  );
}

export default Keys;