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
    <div className="card border border-black rounded-lg shadow-md p-2 flex flex-row items-center w-max gap-2">
      <img className="flag-avatar w-10 h-full shrink-0" src="#" alt="flag-avatar" />
      <div className="content flex flex-col justify-center gap-1">

        <div className="line-1 flex flex-row gap-2 items-center">
          <span className="country">{props.country}</span>
          <span className="year">2025</span>
          <span className="gender">{props.gender}</span>
        </div>

        <div className="line-2 flex flex-row gap-2 items-center">
          <span className="role">{props.roleType} {props.voyageRole}</span>
          <span className="solo-tier"> Solo tier: {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}</span>
          <span className="voyage-tier">Voyage tier: {props.voyageTier.length > 0 ? props.voyageTier : "-"}</span>
          <span className="voyage-num">Voyage: {props.voyageNum.length > 0 ? props.voyageNum : "-"}</span>
        </div>

      </div>
    </div>
  </>
 )

}