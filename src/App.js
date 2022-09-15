import { useState } from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
function App() {
  const [color, setColor] = useState("black");
  
  return (
   
   <div className={styles.App}>
    <Header />
    <Content/>
    </div>
  );
}

export default App;
