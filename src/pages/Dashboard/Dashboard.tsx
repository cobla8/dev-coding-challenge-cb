/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../../assets/css/style.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import { getCurrentDataByCoinId, getList } from '../../services/DataService'
import { Coin, CoinDetails } from '../../objects/Types'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import CoinDetail from '../../components/CoinDetail/CoinDetail'
import PageButtons from '../../components/PageButtons/PageButtons'
import CoinPage from '../../components/CoinPage/CoinPage'
import config from '../../config.json'

function Dashboard(): JSX.Element {
    const initialPageNumber = 0
    const [initialCoinList, setInitialCoincoins] = useState([] as Coin[])
    const [allCoins, setAllcoins] = useState([] as Coin[])
    const [coinDetails, setCoinDetails] = useState({} as CoinDetails)
    const [isCoinListLoaded, setIsCoinListLoaded] = useState(false)
    const [pageContent, setPageContent] = useState([] as Coin[])
    const [pageCount, setPageStartCount] = useState(10)
    const [pageStart, setPageStart] = useState(initialPageNumber)
    const [pageEnd, setPageEnd] = useState(initialPageNumber)
    const [loading, setLoadingFlag] = useState(true)
    const [failed, setFailedFlag] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const searchCoinList = (text: string) => {
        setLoadingFlag(true)
        if (text === '') {
            setAllcoins(initialCoinList)
            setPageStart(initialPageNumber)
        } else {
            setSearchTerm(text)
            const searchResults = initialCoinList.filter(
                (x) => x.name.includes(text) || x.symbol.includes(text)
            )
            setAllcoins(searchResults)
            setPageStart(initialPageNumber)
            setPageContent(searchResults.slice(pageStart, pageCount))
        }
        setLoadingFlag(false)
    }

    const back = () => {
        if (pageStart > 0) {
            const count = pageStart - pageCount
            setPageStart(count)
            const newPageEndCount = count + pageCount
            setPageEnd(newPageEndCount)
            setPageContent(allCoins.slice(count, newPageEndCount))
        }
    }

    const next = () => {
        if (pageStart < allCoins.length) {
            const count = pageStart + pageCount
            setPageStart(count)
            const newPageEndCount = count + pageCount
            setPageEnd(newPageEndCount)
            setPageContent(allCoins.slice(count, newPageEndCount))
        }
    }

    const viewMore = async (coinId: string) => {
        setLoadingFlag(true)
        const response = await getCurrentDataByCoinId(coinId)
        if (response.success) {
            setCoinDetails(response.message)
            const overlay = document.getElementById('overlay')
            const viewCoinBox = document.getElementById('viewCoinBox')
            if (overlay && viewCoinBox) {
                overlay.style.display = 'block'
                viewCoinBox.style.display = 'block'
            }
        } else {
            setFailedFlag(true)
            setErrorMessage(config.text.COIN_DETAIL_FAIL_MSG)
        }
        setLoadingFlag(false)
    }

    const hideNewBox = () => {
        const overlay = document.getElementById('overlay')
        const viewCoinBox = document.getElementById('viewCoinBox')
        if (overlay && viewCoinBox) {
            overlay.style.display = 'none'
            viewCoinBox.style.display = 'none'
        }
    }

    useEffect(() => {
        setLoadingFlag(true)
        if (!isCoinListLoaded) {
            ;(async () => {
                const data = await getList()
                if (data.success) {
                    setAllcoins(data.message)
                    setInitialCoincoins(data.message)
                    setPageContent(data.message.slice(pageStart, pageCount))
                    setIsCoinListLoaded(true)
                } else {
                    setFailedFlag(true)
                    setErrorMessage(config.text.COIN_FETCH_FAIL_MSG)
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
                <Container className="dashboardScreen">
                    <h1>{config.text.DASHBOARD} </h1>
                    <div className="searchBox">
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => searchCoinList(e.target.value)}
                            placeholder={config.text.SEARCH_INPUT_LABEL}
                        />
                        <div className="clear" />
                    </div>
                    <CoinPage pageContent={pageContent} viewMore={viewMore} />
                    <PageButtons
                        pageContent={pageContent}
                        back={back}
                        next={next}
                        pageStart={pageStart}
                        pageCount={pageCount}
                    />
                </Container>
                <CoinDetail coinDetails={coinDetails} hideNewBox={hideNewBox} />
            </div>
        </div>
    )
}
export default Dashboard
