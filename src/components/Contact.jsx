import Navbar from './Navbar';
import '../../src/App.css';
import { FaRegCopy } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const mail = "avinash.m1302@gmail.com";
  return (
    <div className='contactDIv'>
        <Navbar />
        <div className='contactSection'>
          <div className='emailCard'>
            <h1>Email:</h1>
            <div className='mailId'>
              <p>{mail}</p>
              <button alt="copy" onClick={() => {
            navigator.clipboard.writeText(mail);
        }}>
                <FaRegCopy />
              </button>
            </div>
          </div>
          <div className='socialCard'>
            <h1>Social:</h1>
            <div className='socialContactCard'>
              <a href="https://github.com/Avinash01-GIT"><FaGithub /></a>
              <a href='https://www.linkedin.com/in/avinash-manigam-2113a7242/'><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact