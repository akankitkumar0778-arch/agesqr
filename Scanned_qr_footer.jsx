import './Home_footer.css';
import Footer_logo from './footer_logo';
import {useState,useEffect} from "react";

export default function Scanned_qr_footer(){
    const date=new Date();
    return(<>
    <div className="footer Scanned_qr_footer">
        <div className="footer-container">
            <div className="footer_logo_div">
                <Footer_logo/>
                <div className="scanned_footer_logo_div">Instant Access. <a>Life-Saving</a> Information.</div>
                <div className="Team_Name">Team Core</div>
            </div>

            <div className="footer_detail features">
                <div className="quick_links_header">Links</div>
                <a>Home</a>
                <a>Features</a>
                <a>How It Works</a>
            </div>
            
            <div className="footer_detail new_features">
                <div className="quick_links_header">Legal</div>
                <a>Privacy Policy</a>
                <a>Terms & Conditions</a>
                <a>Disclaimer</a>
                <a>Secure Data</a>
            </div>

            <div className="footer_detail contact_detail">
                <div className="quick_links_header">Support</div>
                <a>Contact</a>
                <a>Help Line</a>
                <a>Feedback</a>
            </div>            
        </div>
        
        <div>QR Last Scanned on : {date.toLocaleDateString("en-IN")} at {date.toLocaleTimeString("en-IN")}</div>
        <div className="bottom_footer">
            <div className="copy_right">© 2026 AegisQR. All rights reserved.</div>
            <div className="Team_core">
                <div>v1.0.0 | Team Core</div>
            </div>
        </div>
    </div>
    </>
    );
}