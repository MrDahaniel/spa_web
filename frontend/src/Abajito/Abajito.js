import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './Abajito.css'

const Abajito = () =>{
  const [value, setValue] = React.useState(0);
  return (
    <div class="Box" >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Facebook" />
        <BottomNavigationAction label="Instagram"  />
        <BottomNavigationAction label="Pinterest"  />
      </BottomNavigation>
    </div>
  );
}

export default Abajito