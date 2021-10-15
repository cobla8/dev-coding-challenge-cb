import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../../assets/css/style.css'
import { Coin } from '../../objects/Types'

type Props = {
    back: () => void
    next: () => void
    pageStart: number
    pageCount: number
    pageContent: Coin[]
}

const PageButtons: React.FC<Props> = ({
    back,
    next,
    pageStart,
    pageCount,
    pageContent,
}) => {
    if (pageContent.length > 0) {
        return (
            <Row className="pageButtons">
                <Col>
                    <button
                        type="button"
                        className="prevButton"
                        onClick={() => back()}
                    >
                        <FaChevronLeft />
                    </button>
                </Col>
                <Col>
                    <div className="pageNumber">
                        <div className="pndiv">{pageStart / pageCount + 1}</div>
                    </div>
                </Col>
                <Col>
                    <button
                        type="button"
                        className="nextButton"
                        onClick={() => next()}
                    >
                        <FaChevronRight />
                    </button>
                </Col>
            </Row>
        )
    }
    return <div />
}

export default PageButtons
