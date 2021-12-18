import React from 'react'
//import Footer from './Footer'
import AddTeam from '../containers/AddTeam'
import PlayerList from '../containers/PlayerList'
//import VisibleTeamList from '../containers/VisibleTeamList'

const App = () => (
    <div className="row">
        <div className="col-lg-9 mx-auto">
            <div className="bs-component">
                <div className="card border-info mb-3" >
                    <div className="card-header">مدیریت بازیکنان تیم</div>
                    <div className="card-body">
                        <h4 className="card-title">مشخصات بازیکن</h4>
                        <div className="card-text">
                        <AddTeam />
                        <PlayerList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

  export default App