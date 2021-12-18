import React from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../actions'

const AddPlayer = ({ dispatch }) => {
  let  pName,pID,pPost,pNation

  return (
    <div className="row mb-3">
      <div className="col-10">
        <form name="myform" onSubmit={e => {
          e.preventDefault()
          if (!pName.value.trim()) {
            return
          }
          if (!pID.value.trim()) {
            return
          }
          if (!pNation.value.trim()) {
            return
          }
          if (!pPost.value.trim()) {
            return
          }
          dispatch(addTeam(pName.value, pID.value, pNation.value, pPost.value))
          pName.value = ''
          pID.value = ''
          pNation.value = ''
        }}>
          <div className="form-group row">
            <div className="col-6 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-id-card"></i>
                  </div>
                </div> 
                <input id="playerName" name="playerName" placeholder="نام بازیکن" type="text" className="form-control" ref={node => pName = node} /> 
                <div className="input-group-append">
                  <div className="input-group-text">نام بازیکن</div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-address-card"></i>
                  </div>
                </div> 
                <input id="playerNumber" name="playerNumber" placeholder="شماره بازیکن" type="number" className="form-control" ref={node => pID = node} /> 
                <div className="input-group-append">
                  <div className="input-group-text">شماره بازیکن</div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <select id="playerPost" name="playerPost" aria-describedby="playerPostHelpBlock" className="form-select"  ref={node => pPost = node}>
                <option value="attack">مهاجم</option>
                <option value="halfback">میانی</option>
                <option value="defense">مدافع</option>
                <option value="goaler">دروازه بان</option>
              </select> 
              <span id="playerPostHelpBlock" className="form-text text-muted">پست بازیکن</span>
            </div>
            <div className="col-6 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-globe-asia"></i>
                  </div>
                </div> 
                <input id="playerNationality" name="playerNationality" placeholder="ملیت بازیکن" type="text" className="form-control"  ref={node => pNation = node}/> 
                <div className="input-group-append">
                  <div className="input-group-text">ملیت بازیکن</div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" name="submit">
            Add Player
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect()(AddPlayer)
