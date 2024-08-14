import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplData: {}, isLoading: true}

  componentDidMount() {
    this.getCardList()
  }

  getCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      iplData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {iplData, isLoading} = this.state

    return (
      <div className="dashboard-container">
        <div className="head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {iplData.map(eachCard => (
              <TeamCard key={eachCard.id} cardDetails={eachCard} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
