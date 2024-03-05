import styles from './Content.module.css'

function Content (props) {
    return(
   
        <div className={styles.contanier}>
            <img className={styles.img} src={props.Img} />
            <h1 className={styles.titulo}>{props.Titulo}</h1>
            <p className={styles.texto}>{props.Text}</p>
        </div>
    )
}

export default Content