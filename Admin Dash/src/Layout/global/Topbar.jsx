import React from 'react'
import SearchComponent from '../../Components/search'

function Topbar() {
  return (
    <div className="Topbar">
        <div className="leftnav">
            <div className="search">
<SearchComponent/>
            </div>
            <div className="heading">
                <h2>Dashboard</h2>
                <p>Welcome to your dashboard</p>
            </div>
        </div>
        <div className="right">
            <div className="icons"></div>
            <div className="buttons">
                <button>Download Report</button>
            </div>
        </div>
    </div>
  )
}

export default Topbar