import React from 'react';
import './Landing.css';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Landing = () => {
  let history = useHistory();
  return (
    <div className="landing">
      
    <div>
      <div className="landingLeft">
        <h2>
          Find the perfect <i>tutor</i>{" "}
        </h2>
        <h2>For you or your child</h2>
        <div>
          <div className="chip">
            <small>Popular :</small>

            <Button onClick={() => history.push("/higher-math")}>
              Math
            </Button>
            <Button onClick={() => history.push("/physics")}>
              Physics
            </Button>
            <Button onClick={() => history.push("/accounting")}>
              Accounting
            </Button>
            <Button onClick={() => history.push("/chemistry")}>
              Chemistry
            </Button>
          </div>
        </div>
      </div>
      <div className="landingRight">
        <img src="http://pngimg.com/uploads/man/man_PNG6533.png" alt="" />
      </div>
    </div>
  </div>
  );
};

export default Landing;