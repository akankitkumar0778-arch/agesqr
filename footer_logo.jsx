import './Footer_logo.css';
import logo from './assets/logo.png'

export default function Footer_logo(){
    return(
        <div className="full_logo">
            <img className="my_logo_image" src={logo} alt="My Logo"/>
            <div className="Name_project">AegisQR</div>
        </div>
        
    );
}