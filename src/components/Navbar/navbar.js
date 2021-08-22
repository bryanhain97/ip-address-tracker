
function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-elements">
                <h3 className="nav-label">IP ADDRESS</h3>
                <p className="nav-display">-</p>
            </div>
            <span className="seperate"></span>
            <div className="nav-elements">
                <h3 className="nav-label">LOCATION</h3>
                <p className="nav-display">-</p>
            </div>
            <span className="seperate"></span>
            <div className="nav-elements">
                <h3 className="nav-label">TIMEZONE</h3>
                <p className="nav-display">-</p>
            </div>
            <span className="seperate"></span>
            <div className="nav-elements">
                <h3 className="nav-label">ISP</h3>
                <p className="nav-display">-</p>
            </div>
        </div>
    )
}


export default Navbar;