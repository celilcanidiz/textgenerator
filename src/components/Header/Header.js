import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'
import styles from './Header.module.css';
import {fetchData} from '../../redux/slice/textSlice';

function Header() {
  
  return (
    <div className={styles.HeaderSection}>
      <div className={styles.ContentDiv}>
          <h1>React sample text generator app</h1>
          <hr className={styles.hr}/>
      </div>
    </div>
  )
}

export default Header