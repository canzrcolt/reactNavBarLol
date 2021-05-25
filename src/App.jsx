import React from 'react'
import {useState} from 'react'
import styles from './NavBar.module.css'
import {AiFillFolderOpen} from 'react-icons/ai'
import {CgClapperBoard} from 'react-icons/cg'
const App = () => {

    const [navBoxIsVisible, setNavBoxStatus] = useState(false)


    const navBox = <div style={{width: '100vw', backgroundColor: 'yellow', height: '20em'}}>bruv we are open</div>
    return (
        <div>

            <nav className={styles.Nav}>
                
            <AiFillFolderOpen onClick={() => setNavBoxStatus(!navBoxIsVisible)} size='40px' color='white'/>
                </nav>
            <h1>sup</h1>
            <h2>please hit the button below</h2>
            <CgClapperBoard size='50px' />

            {navBoxIsVisible ? navBox : <></>}

        </div>
    )
}

export default App
