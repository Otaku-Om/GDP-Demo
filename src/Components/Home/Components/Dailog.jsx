import React from 'react';
import "./Styles/Dailog.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import Form from '../../ReusableComponents/Form';
import CloseIcon from '@mui/icons-material/Close';


const Dailog = ({ handler }) => {
  return (
    <div id='Dialog' className="Dialog">
      <div className='Dialog-Box'>
        <div className="Dialog-Box-Content">
          <div className="Dialog-Box-Content-Top">
            <p>Wedding Choreography</p>
            <p>Online | Offline</p>
          </div>
          <div className="Dialog-Box-Content-Main">
            <h2>Make your special day unforgettable</h2>
            <ul className='Dialog-Box-Content-Main-Pointers'>
              <li>Personalised Choreographies</li>
              <li>Flexible time schedules<br />(Opeartional in US HOURs as well)</li>
              <li>Complementary music edits</li>
            </ul>
            <div className="Dialog-Box-Content-Main-Video">
              <div className="Dialog-Box-Content-Main-Video-Container">
                <img src="https://plus.unsplash.com/premium_photo-1684581969889-67d386781d37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <PlayArrowIcon id="Dialog-Box-Video-Button" />
              </div>
              <p>Check out our wedding routines</p>
            </div>
          </div>
        </div>
        <Form text="Let us reach you!" classSelector="D" />
        <div onClick={handler} className="Dialog-Close">
          <CloseIcon />
        </div>
      </div>
    </div>
    
  )
}

export default Dailog