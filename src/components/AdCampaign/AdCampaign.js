import React from 'react';
import image1 from "../../image1.png"
import image2 from "../../image2.png"
import "./AdCampaign.css";
import { Box, Divider } from '@mui/material';
import { ReactComponent as LineArrow } from '../../Vector 123.svg';

const AdCampaign = () => {
  return (
    <>
      <div className='plan-label'>Do Ad Campaigns in Sledgen</div>
      <div className='image-container'>
        <img src={image1} alt="Logo" />
        <img src={image2} alt="Logo" />
      </div>
      <Divider variant="middle" style={{ backgroundColor: '#474747' }}  />
      <Box className="help">
      <h3>Help</h3>
      <div className='help-content'>
        <LineArrow /> 
        <div className='help-box'>
          <span className='help-heading'>Violation Filing Content</span>
          <div className='help-description'>
            <p>Violation of Sledge Terms and condition or Sledge Guideline or Both can be done by click the “File Violation” Button with the Adequate details and proof of the such violation.</p>
            <p>Details may require is Screenshot, Screen video & The URL. One can also upload other details if relevant to situation.</p>
          </div>
        </div>
      </div>
    </Box>
    </>
  );
};

export default AdCampaign;
