function Header(props) {
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
            <img
                alt="logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                className="nav--logo_icon"
            />

            <h3 className="nav--logo_text">ReactFacts</h3>

            {/* <h4 className="nav--title">React Course - Project 1</h4> */}

            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Header;