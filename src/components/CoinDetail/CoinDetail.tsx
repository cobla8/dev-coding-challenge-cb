import React from 'react'
import { Table } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import '../../assets/css/style.css'
import { CoinDetails } from '../../objects/Types'
import config from '../../config.json'

type Props = {
    coinDetails: CoinDetails
    hideNewBox: () => void
}

const CoinDetail: React.FC<Props> = ({ coinDetails, hideNewBox }) => {
    if (coinDetails) {
        return (
            <div className="viewCoinBox" id="viewCoinBox">
                <div className="boxHeader">
                    {config.text.COIN_DETAILS}
                    <FaTimes
                        className="closeBox"
                        onClick={() => hideNewBox()}
                    />
                </div>
                <div className="viewCoinBoxInner">
                    <img
                        src={coinDetails.image ? coinDetails.image.small : ''}
                        className="coinLogo"
                        alt="logo"
                    />
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <th>Symbol</th>
                                <td>
                                    {coinDetails.symbol
                                        ? coinDetails.symbol
                                        : ''}
                                </td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>
                                    {coinDetails.name ? coinDetails.name : ''}
                                </td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    {coinDetails.description
                                        ? coinDetails.description.en
                                        : ''}
                                </td>
                            </tr>
                            <tr>
                                <th>Home page</th>
                                <td>
                                    <a
                                        target="_blank"
                                        href={
                                            coinDetails.links
                                                ? coinDetails.links.homepage[0]
                                                : ''
                                        }
                                        rel="noreferrer"
                                    >
                                        {coinDetails.links
                                            ? coinDetails.links.homepage[0]
                                            : ''}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th>Genesis date</th>
                                <td>
                                    {coinDetails.genesis_date
                                        ? coinDetails.genesis_date
                                        : ''}
                                </td>
                            </tr>
                            <tr>
                                <th>Public interest score</th>
                                <td>
                                    {coinDetails.public_interest_score
                                        ? coinDetails.public_interest_score
                                        : ''}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    return <div />
}

export default CoinDetail
