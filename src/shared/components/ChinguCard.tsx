type ChinguCardPropsType = {
  gender: string,
  country: string,
  roleType: string,
  voyageRole: string,
  soloProjectTier: string,
  voyageTier: string,
  voyageNum: string,
  timestamp: string
}

export default function ChinguCard(props: ChinguCardPropsType) {
 return (
  <>
    <div className="card">
      <img className="flag-avatar" src="#" alt="flag-avatar" />
      <div className="content">

        <div className="line-1">
          <span className="country">{props.country}</span>
          <span className="year">2025</span>
          <span className="gender">{props.gender}</span>
        </div>

        <div className="line-2">
          <span className="role">{props.roleType} {props.voyageRole}</span>
          <span className="solo-tier">{props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}</span>
          <span className="voyage-tier">{props.voyageTier.length > 0 ? props.voyageTier : "-"}</span>
          <span className="voyage-num">{props.voyageNum.length > 0 ? props.voyageNum : "-"}</span>
        </div>

      </div>
    </div>
  </>
 )

}