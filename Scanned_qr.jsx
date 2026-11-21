import Timer from './Timer.jsx';
import Scanned_qr_footer from './Scanned_qr_footer.jsx'
import './Scanned_qr.css';
import logo from './assets/logo.png';
import { TbShieldPlus } from 'react-icons/tb';
import { FaUserShield,FaPhone } from 'react-icons/fa';
export default function Scanned_qr(){
    return (
    <>
        <div className="Scanned_Qr">

            <div className="Scanned_Qr_heading">
                <div className="Scanned_Qr_project_name">
                    <img className="my_logo_image" src={logo} alt="My Logo"/>
                    <h3>AegisQR</h3>
                </div>

                <div className="headerInfo">
                    <div><span>Name:</span>
                    <p>Ankit Kumar</p></div> &nbsp;
                    <div><span>Age:</span>
                    <p>19</p></div>&nbsp;
                    <div><span>Gender:</span>
                    <p>Male</p></div>
                </div>
                <div>
                    <button><FaUserShield className='icon_button_qr'/>Authorize Emergency Access</button>
                </div>
                <div>
                    <button id='emergency_contant_btn'><FaPhone className='icon_button_qr'/> Emergency Contacts</button>
                </div>
                <div><Timer/></div>
            </div>   

            <div className="detail_containeer">
                <div className="Emergency_contect_access">
                    <div className="Emergency_conatct_private">
                        <TbShieldPlus /><h3>Need Immediate Help?</h3>
                    </div>
                    <br/>
                    <div className="proxy_details">
                        <h3>Proxy Management</h3>
                        <div id="proxy_each_details">
                            <p>Ankita Kumari </p>
                            <button> Access Granted</button>
                            
                        </div>
                        <div id="proxy_each_details">
                            <p>Ankit Kumar</p>
                            <button>Granted</button>
                        </div>
                    </div>
                </div>
                <div className="Medical_Directives">
                    <h3>Medical Directives</h3>
                    <br/>
                    <div>
                        <span> Resuscitation</span>
                        <p>DNR Status: yes |  CPR: Do Not Allow</p>
                    </div>
                    <div>
                        <span>Life Support</span>
                        <p>Ventilator: Allow  |  Duration: Short-term</p>
                    </div>
                    <div>
                        <span> Blood & Organ</span>
                        <p>Transfusion: Allow  |  Organ Donation: Yes</p>
                    </div>
                    <div>
                        <span> Treatment Preferences</span>
                        <p>Hospital: xyz hospital</p>
                        <p>Doctor: Rajesh Kumar — 9876543210</p>
                    </div>
                    <div>
                        <span> Medication Instructions</span>
                        <p>Medicines to Avoid: See Allergies</p>
                    </div>
                    <div>
                        <span>Religious / Personal Choices</span>
                        <p>Restrictions: None specified</p>
                    </div>
                    <div>
                        <span> Emergency Instructions</span>
                        <p>• Follow standard emergency protocol</p>
                        <p>• Inform family before surgery</p>
                    </div>
                </div>
                <div className="all_Critical_Information"> 
                    <div className="Critical_Information">
                        <h2>Critical Information</h2>
                        <br/>
                        <div>
                            <span> Blood Type</span>
                            <p>O+ (Positive)</p>
                        </div>
                        <div>
                            <span> Allergies</span>
                            <p>Penicillin, Peanuts</p>
                        </div>
                        <div>
                            <span> Medications</span>
                            <p>Metformin 500mg (2x daily)</p>
                        </div>
                        <div>
                            <span> Medical Conditions</span>
                            <p>Type 2 Diabetes</p>
                        </div>
                    </div>
                    <br/>
                    <div className="Medical_Reports">
                        <h3>Medical Reports</h3>
                        <div>
                            <p>Ultrasound</p>
                        </div>
                        <div>
                            <p>xray</p>
                        </div>
                        <div>
                            <p>other report</p>
                        </div>
                    </div>
                </div>                 
            </div>
            <br/>
            <Scanned_qr_footer/>
        </div> 
    </>
    );
}