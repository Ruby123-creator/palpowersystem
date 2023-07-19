import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const actions = [
  { icon: <EmailIcon             className='text-cyan-700'
  />, name: 'Email' , path:'mailto:palpowersystem17@gmail.com' },
  { icon: <WhatsAppIcon             className='text-cyan-700'
  />, name: '9818756933', path:'https://web.whatsapp.com/send?phone=9818756933' },
  { icon: <CallIcon             className='text-cyan-700'
  />, name: '9650690631',path:"https://web.whatsapp.com/send?phone=9650690631"},

  { icon: <TelegramIcon             className='text-cyan-700'
  />, name: 'Send Enquiry' ,path:'mailto:palpowersystem17@gmail.com' },
];

 function DialTool() {
  return (
    <div style={{position:'fixed' ,bottom:'10px' ,right:'10px'}}>
    <Box  sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1  }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SupportAgentIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={(e)=>{
              e.preventDefault();
              window.location.href = action.path;

            }}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
  );
}

export default DialTool
