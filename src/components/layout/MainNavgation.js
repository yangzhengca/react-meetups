import { classDeclaration } from '@babel/types'
import { Link } from 'react-router-dom'
import classes from './MainNavgation.module.css'

const MainNavgation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavgation
