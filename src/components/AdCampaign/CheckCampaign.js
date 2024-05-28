import React from 'react';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import checkCampaignImg from "../../CheckCampaignImg.png"
import './CheckCampaign.css';

const CheckCampaign = () => {
    return (
        <Card className='start-card'>
            <div className="card2-root">
                <div className='card-2'>
                    <img src= {checkCampaignImg}/>
                    <div className='card2-content'>
                        <div className="line"></div>
                        <span className="title">Check Campaign</span>
                        <p className="description">
                        Check details of previous campaigns to understand the Market & Target your customers Effectively                        </p>
                        <Button className="button">
                           <span>Previous Campaigns</span> 
                        </Button>     
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CheckCampaign
