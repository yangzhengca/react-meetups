import MainNavgation from './MainNavgation'
import classes from './Layout.module.css'

const layout = (props) => {
    return (
        <div>
            <MainNavgation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default layout
