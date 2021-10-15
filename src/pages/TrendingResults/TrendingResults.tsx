/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/css/style.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import { getTrendingResults } from '../../services/DataService'
import { TrendingResult } from '../../objects/Types'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import config from '../../config.json'

function TrendingResults(): JSX.Element {
    const [allTrendingResults, setAllTrendingResults] = useState(
        [] as TrendingResult[]
    )
    const [isTrendingResultsLoaded, setIsTrendingResultsLoaded] =
        useState(false)
    const [loading, setLoadingFlag] = useState(true)
    const [failed, setFailedFlag] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setLoadingFlag(true)
        if (!isTrendingResultsLoaded) {
            ;(async () => {
                const data = await getTrendingResults()
                if (data.success) {
                    setAllTrendingResults(data.message.coins)
                    setIsTrendingResultsLoaded(true)
                } else {
                    setFailedFlag(true)
                    setErrorMessage(config.text.TRENDING_RESULTS_FAIL_MSG)
                }
                setLoadingFlag(false)
            })()
        }
    }, [])
    return (
        <div>
            <PageHeader />
            <Loader loading={loading} />
            <ErrorMessage failed={failed} errorMessage={errorMessage} />
            <div className="innerPage">
                <Container className="TrendingResultsScreen">
                    <h1>{config.text.TRENDING_RESULTS}</h1>
                    {allTrendingResults.map(
                        (trendingResult: TrendingResult, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>ID</Col>
                                    <Col>{trendingResult.item.id}</Col>
                                    <Col>
                                        <img
                                            src={
                                                trendingResult.item.small
                                                    ? trendingResult.item.small
                                                    : ''
                                            }
                                            className="coinLogo"
                                            alt="logo"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>ID</Col>
                                    <Col>{trendingResult.item.id}</Col>
                                    <Col> </Col>
                                </Row>
                                <Row>
                                    <Col>SYMBOL</Col>
                                    <Col>{trendingResult.item.symbol}</Col>
                                    <Col> </Col>
                                </Row>
                                <Row>
                                    <Col>NAME</Col>
                                    <Col>{trendingResult.item.name}</Col>
                                    <Col> </Col>
                                </Row>
                                <hr />
                            </div>
                        )
                    )}
                </Container>
            </div>
        </div>
    )
}
export default TrendingResults
