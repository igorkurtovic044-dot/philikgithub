import './App.css'
import styles from './App.module.css';

import Card from './card';


function App() {


  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardcontainer}>
        <Card title="Tim Turbo!" text="Dies ist ein Beispiel für eine Karte." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
        <Card title="Max Mustermann" text="Dies ist ein weiteres Beispiel für eine Karte." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
        <Card title="Erika Musterfrau" text="Dies ist ein drittes Beispiel für eine Karte." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
        </div>
    </>
  )
}

export default App
