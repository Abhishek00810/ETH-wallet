import React, { useState } from "react";
import "../../index.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bip39, generateMnemonic } from "bip39";
import { Wallet } from "ethers";
import Alert from 'react-bootstrap/Alert';

import { Buffer } from 'buffer';
function LandingPage(props) {
  window.Buffer = Buffer;
  const [inputvalue, setvalue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  async function generate()
  {
    const mn =  generateMnemonic();
    console.log(mn);
    setvalue(mn);
    props.send_data(mn);
    const wallet = Wallet.fromPhrase(mn);
    setPrivateKey(wallet.privateKey);
    setPublicKey(wallet.publicKey);
    props.send_pub_key(wallet.publicKey);
    props.send_pri_key(wallet.privateKey);
  }

  function reset()
  {
    setPrivateKey('');
    setPublicKey('');
     setvalue('');
     props.send_data(mn);
     props.send_pub_key(wallet.publicKey);
     props.send_pri_key(wallet.privateKey);
  }

  function COPYFILE()
  {
    navigator.clipboard.writeText(inputvalue)
    setAlertMessage("Text Copied");
    setShowAlert(true);
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
          {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}

      <Modal.Dialog data-bs-theme="dark">
        <Modal.Header data-bs-theme="dark">
          <Modal.Title style={{color: 'black'}}>
            <h3 style={{color: '#757575'}}>Paraphrase</h3>
          </Modal.Title>
        </Modal.Header>

        <textarea onClick={COPYFILE} value = {inputvalue} placeholder="Your paraphrase will be generated here" style={{padding: '2rem', margin:
          '1rem', fontSize: '1.2rem', fontWeight: 'bold',  color: '#757575', cursor: 'pointer'
         }
        }>
        </textarea>

        <Modal.Footer>
          <Button variant="primary" onClick={generate}>Generate</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LandingPage;