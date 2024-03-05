import styles from './Paragrafo.module.css'

function Paragrafo (props){
    return (
        <div>

            <h1 className={styles.paragrafoTitulo}>
                {props.Titulo}
                </h1>
            <p className={styles.paragrafoTexto}>
                {props.Texto}
            </p>
        </div>
    )
}

export default Paragrafo