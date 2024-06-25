import classes from './Header.module.css'

const Header = () => {
    return(
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>TODO TRACKER</h1>
        </div>
    )
}

export default Header;