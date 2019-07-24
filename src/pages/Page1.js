import React from 'react'
import { withRouter } from 'react-router-dom'


export function Page1(props) {

    return (
        <div>
            <p>This is page 1.</p>
        </div>
    );

}

export default withRouter(Page1);