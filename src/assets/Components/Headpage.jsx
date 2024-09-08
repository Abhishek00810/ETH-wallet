import React, { useState } from "react";
import "../../index.css";
import { Button } from "react-bootstrap";
import LandingPage from "./Landingpage";
function Headpage()
{
    const [page, setpage] = useState(false);
    function hide_component()
    {
        setpage(true);
        return (
            <div>
              <LandingPage />
            </div>
          )
    }
    return(
        <div>
            <h2>Ab-hi</h2>
            <div className="intro">
            <h3>Your Secret Phrase</h3>
            <Button className="closing" primary onClick={hide_component}>Print</Button>
            </div>
        </div>
    );
}

export default Headpage;