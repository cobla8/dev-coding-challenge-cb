import React from 'react'
import '../../assets/css/style.css'

type Props = {
    failed: boolean
    errorMessage: string
}

const ErrorMessage: React.FC<Props> = ({ failed, errorMessage }) => {
    if (failed) {
        return (
            <div
                className="errorMessage"
                style={{ display: failed ? 'block' : 'none' }}
            >
                {errorMessage}
            </div>
        )
    }
    return <div />
}

export default ErrorMessage
