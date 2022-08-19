import css from '../sass/CssModule.module.scss'

// npm install node-sass

export const CssModule = (props) => {

    const {message} = props
    const {container, title, button} = css

    return (
        <div className={container}>
            <p className={title}>{message}</p>
            <button className={button}>Button</button>
        </div>
    )
}
