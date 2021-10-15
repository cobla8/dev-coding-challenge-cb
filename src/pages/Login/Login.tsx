import React from 'react'
import '../../assets/css/style.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from '../../config.json'
import logo from '../../assets/images/logo.svg'

function Login(): JSX.Element {
    return (
        <div className="loginPage">
            <Container>
                <div className="loginForm">
                    <Row>
                        <Col>
                            <img src={logo} className="logo" alt="logo" />
                            <div className="loginContainer">
                                <Link to="/dashboard">
                                    {config.text.LOGIN_LABEL}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Login
