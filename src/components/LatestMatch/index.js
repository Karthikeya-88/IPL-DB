import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match">Latest Matches</h1>
      <div className="latest-match-details-container">
        <div className="latest-match-details-1">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="competingteamlogo">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latest-match-team-logo"
          />
        </div>
        <div className="latest-match-details-2">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
