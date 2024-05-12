import Navbar from './Navbar';
import poke from './poke.png';
import snakeg from './snakeg.png';

const Projects = () => {
  return (
    <div className='projectDiv'>
        <Navbar />
        <div className='projectSection'>
            <div className='projectCard'>
                <a href='https://github.com/Avinash01-GIT/Pokemon-Project'>
                    <div className='project'>
                        <img src={poke} className='projectImage' />
                        <p>Pokemon Finder</p>
                        <p>JavaScript | CSS</p>
                        <a className='live' href='https://avinash01-git.github.io/Pokemon-Project/'>Go live</a>
                        <a className='repo' href='https://github.com/Avinash01-GIT/Pokemon-Project'>Git repo</a>
                    </div>
                </a>
            </div>
            <div className='projectCard'>
                <a href='https://github.com/Avinash01-GIT/Snake-Game'>
                    <div className='project'>
                        <img src={snakeg} className='projectImage' />
                        <p>Snake Game</p>
                        <p>JavaScript | CSS</p>
                        <a className='live' href='https://avinash01-git.github.io/Snake-Game/'>Go live</a>
                        <a className='repo' href='https://github.com/Avinash01-GIT/Snake-Game'>Git repo</a>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects