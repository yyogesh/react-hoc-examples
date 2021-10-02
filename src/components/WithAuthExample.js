import React from 'react'
import withAuth from './withAuth'

const WithAuthExample = () => {
    return (
        <div>
            This is only viewable by authenticated users.
        </div>
    )
}

export default withAuth(WithAuthExample)
