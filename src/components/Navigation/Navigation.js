import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { ReactComponent as SubscriptionIcon } from "../../credit-card.svg";
import { ReactComponent as AdCampaignIcon } from '../../ad_campaign.svg';
import { ReactComponent as LearnSledgingIcon } from '../../learn_sledging.svg';
import { ReactComponent as GeneralGuidelinesIcon } from '../../general_guidelines.svg';

import AdCampaign from '../AdCampaign/AdCampaign';
import SubscriptionPlans from '../SubscriptionPlans/SubscriptionPlans';
import './Navigation.css';

const Navigation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabStyle = (index) => ({
    color: '#FFFF',
    backgroundImage: value === index 
      ? 'linear-gradient(180deg, #01E5D4 0%, #137AEA 83%)' 
      : 'linear-gradient(180deg, black, black)',
    borderRadius: '8px',
    mx: 1,
    px: 2,
    py: 1
  });

  return (
    <Box className="navigation">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
      >
        {[SubscriptionIcon, AdCampaignIcon, LearnSledgingIcon, GeneralGuidelinesIcon].map((IconComponent, index) => (
          <Tab
            key={index}
            label={
              <Box className="tab-container">
                <div className='icon-container' style={{ background:value === index ? "#3358FF" : "#111111"}}>
                <IconComponent/>
                </div>
                <span>{["Subscription", "Ad Campaign", "Learn Sledging", "General Guidelines"][index]}</span>
              </Box>
            }
            sx={getTabStyle(index)}
          />
        ))}
      </Tabs>
      {value === 0 && <SubscriptionPlans />}
      {value ===1 && <AdCampaign />}
    </Box>
  );
}

export default Navigation;
