import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <li className="lists">
      <Link to={`/team-matches/${id}`}>
        <div className="list-item">
          <img src={teamImageUrl} alt={name} className="image-url" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
