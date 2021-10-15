/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Table } from 'react-bootstrap'
import '../../assets/css/style.css'
import { Coin } from '../../objects/Types'
import config from '../../config.json'

type Props = {
    pageContent: Coin[]
    viewMore: (id: string) => void
}

const CoinPage: React.FC<Props> = ({ pageContent, viewMore }) => {
    if (pageContent.length > 0) {
        return (
            <Table striped bordered hover>
                <thead className="tableHeading">
                    <tr>
                        <th>{config.text.TH_ID}</th>
                        <th>{config.text.TH_NAME}</th>
                        <th>{config.text.TH_SYMBOL}</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {pageContent.map((item: Coin, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.symbol}</td>
                            <td>
                                <button
                                    type="button"
                                    className="viewMore"
                                    onClick={() => viewMore(item.id)}
                                >
                                    {config.text.VIEW_DETAILS}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
    return (
        <div>
            <p>Nothing load</p>
        </div>
    )
}

export default CoinPage
