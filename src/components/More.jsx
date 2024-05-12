import Navbar from './Navbar';
import '../../src/App.css';
import speechtext from './speechtext.png';
import passwordApp from './passwordApp.png'

const More = () => {
  return (
    <div className='projectDiv'>
        <Navbar />
        <div className='projectSection'>
            <div className='projectCard'>
                <a href='https://github.com/Avinash01-GIT/Speech-to-Text-Converter'>
                    <div className='project'>
                        <img src={speechtext} className='projectImage' />
                        <p>Speech to Text Converter</p>
                        <p>React JS | CSS</p>
                        <a className='live' href='https://speech-to-text-converter-ruddy.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/Avinash01-GIT/Speech-to-Text-Converter'>Git repo</a>
                    </div>
                </a>
            </div>
            <div className='projectCard'>
                <a href='https://github.com/Avinash01-GIT/Password-Generator_React'>
                    <div className='project'>
                        <img src={passwordApp} className='projectImage' />
                        <p>Password Generator</p>
                        <p>React JS | CSS</p>
                        <a className='live' href='https://password-generator-react-rouge-six.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/Avinash01-GIT/Password-Generator_React'>Git repo</a>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default More