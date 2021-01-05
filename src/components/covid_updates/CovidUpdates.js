import React from 'react'
import "../../styles/CovidUpdates.css";

function CovidUpdates() {

    return (
        <div className="cu_container">
            <div style={{ height: "100px" }} />
            <iframe src="https://ncovtracker.doh.gov.ph"
                frameBorder="0" height="700px" width="100%" title="covid_update" align="middle"></iframe>

        </div>
    )
}

export default CovidUpdates
