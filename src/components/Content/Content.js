import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/slice/textSlice'
import styles from './Content.module.css';

function Content() {
  const { text, status } = useSelector(state => state.textItem)
  const [paraf, setParaf] = useState(4);
  const [textType, setTextType] = useState("text");
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({paraf, textType}))
  }, [paraf,textType, dispatch]);

  return (
    <>
    <div className={styles.ContentDiv2}>
              <div className={styles.InputGroup}>
                    <label className={styles.Label}>Paragraph :</label>
                    <input className={styles.Input} min={1} type={'number'} value={paraf} onChange={(e) => setParaf(e.target.value
                    )} />
              </div>
              <div className={styles.InputGroup}>
                    <label className={styles.Label}> HTML :</label>
                    <select className={styles.SelectBox} value={textType} onChange={(e) => setTextType(e.target.value)}>
                    <option value={"text"}>NO</option>
                    <option value={"html"}>YES</option>
                    </select>
              </div>
          </div>
    <div className={styles.ContentSection}>
      {text}
  </div>
  </>
  )
}

export default Content