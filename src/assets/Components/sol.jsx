import { useState, useEffect } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import Keys from "./Keys";
import Button from 'react-bootstrap/Button';
function Sol(props) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [addresses, setAddresses] = useState([]);
    const [PublicDelete, SetPublicDelete] = useState('');

    const delete_function = (childdata)=>{
        SetPublicDelete(childdata);
        let newaddress = [];
        for(let i = 0;i<addresses.length;i++)
        {
            if(addresses[i][0] === childdata) continue;
            newaddress.push(addresses[i]);
        }
        setAddresses(newaddress)

    }
    useEffect(() => {
        if (props.publicKey && props.privateKey) {
            // Update addresses state with the new values
            setAddresses([[props.publicKey, props.privateKey]]);
        }
    }, [props.publicKey, props.privateKey]); // Trigger when props change

// Initialize with a pair of public/private key
    return (
        <div>
            <Button variant="danger" data-bs-theme="dark" onClick={async function() {
                const seed = await mnemonicToSeed(props.mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0/0`; // Adjusted derivation path
                const hdNode = HDNodeWallet.fromSeed(seed);
                const child = hdNode.derivePath(derivationPath);

                const privateKey = child.privateKey; // Private key from derived wallet
                const wallet = new Wallet(privateKey); // Create wallet from private key

                setCurrentIndex(currentIndex + 1); // Increment index for the next wallet
                setAddresses([...addresses, [wallet.address, privateKey]]); // Add new wallet (public and private keys) to addresses
            }}>
                Add ETH wallet
            </Button>
            
            {addresses.map((p, index) => (
                <div >
                    <Keys publicKey={p[0]} privateKey={p[1]} DELETE_ITEM = {delete_function} />
                </div>
            ))}
        </div>
    );
}

export default Sol;
