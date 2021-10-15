import React from 'react'
import '../../assets/css/style.css'

type Props = {
    loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {
    if (loading) {
        return (
            <div
                className="loader"
                style={{ display: loading ? 'block' : 'none' }}
            >
                <div className="loaderElement" />
            </div>
        )
    }
    return <div />
}

export default Loader
