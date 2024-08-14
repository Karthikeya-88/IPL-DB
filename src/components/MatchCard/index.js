import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li>
      <div className="match-card-item">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
        <p className="competing-team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
