import React from 'react'
import '../../assets/css/style.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import config from '../../config.json'

function PageHeader(): JSX.Element {
    return (
        <div className="headerTop">
            <img src={logo} className="logo" alt="logo" />
            <div className="headerRightBox">
                <ul className="menu">
                    <li>
                        <Link to="/dashboard">{config.text.DASHBOARD}</Link>
                    </li>
                    <li>
                        <Link to="/trending-results">
                            {config.text.TRENDING_RESULTS}
                        </Link>
                    </li>
                    <li>
                        <Link to="/">{config.text.LOGOUT_LABEL}</Link>
                    </li>
                </ul>
                <div className="clear" />
            </div>
            <div className="overlay" />
        </div>
    )
}
export default PageHeader
