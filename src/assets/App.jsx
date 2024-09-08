import React, { useState } from "react"
import LandingPage from "./Components/Landingpage"
import Headpage from "./Components/Headpage"
import Sol from "./Components/sol"
function App() {
  const [mnemonic, setmnemonic] = useState();
  const [publicKey, setPublicKey] = useState();
  const [privateKey, setPrivateKey] = useState();
  const handledata = (childdata) =>{
    setmnemonic(childdata);
  }
  const handle_pub = (childdata) =>{
    setPublicKey(childdata);
  }
  const handle_pri = (childdata) =>{
    setPrivateKey(childdata);
  }

  return (
    
    <div>
      <LandingPage send_data = {handledata} send_pub_key = {handle_pub} send_pri_key = {handle_pri}/>
      <Sol mnemonic={mnemonic} publicKey = {publicKey} privateKey = {privateKey}/>
    </div>
  )
}
export default App
