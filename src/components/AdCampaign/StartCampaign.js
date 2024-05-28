import React from 'react';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import startCampaignImg from "../../startCampaignImg.png";
import './StartCampaign.css';

const StartCampaign = () => {
    return (
        <Card className='start-card'>
            <div className="root">
                <div className='card-1'>
                    <img src= {startCampaignImg}/>
                    <div className='card-content'>
                    <div className="line"></div>
                        <span className="title">How to run Ad.</span>
                        <p className="description">
                            The Ads shall run on the public Video contents of Sledge. Which may have the button to navigate to the desired Website, App, Forms, or Other places as set by the Ad runner.
                        </p>
                        <Button className="button">
                           <span>Start Campaigning</span> 
                        </Button>     
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default StartCampaign
