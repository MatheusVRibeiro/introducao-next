import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className={styles.tituloHome}> Titulo 1</h1>
      <h2>Título 2</h2>
      <h2>Título 3</h2>
      <p className="txtDestaque">Primeiro exemplo no Next</p>
      <p>Primeiro exemplo no Next</p>
      <small>Texto menor</small>
      <br />

      <div className="quadrado"></div>

      <Image 
      src={'/temp/arvore.jpg'} 
      alt="Arvore" 
      width={130} 
      height={90} 

      />

      <Image 
      src={'/temp/arvorepequena.jpg'} 
      alt="Arvore" 
      width={1300} 
      height={900} 
      
      />
    </div>
  );
}
