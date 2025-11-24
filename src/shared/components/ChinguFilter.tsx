export default function ChinguFilter() {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="joined">Year of joining</label>
          <input 
            type="range"
            name="joined"
            id="joined"
            min="1999"
            max="2025"
            className="my-2 mr-2 block" />
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Gender</legend>
            <div>
              <input type="checkbox" id="female" name="female" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="checkbox" id="male" name="male" value="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="non-binary"
                name="non-binary"
                value="non-binary"
              />
              <label htmlFor="non-binary">Non-binary</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Country</legend>
            <div>
              <input
                type="radio"
                id="country-desc"
                name="country-desc"
                value="country-desc"
              />
              <label htmlFor="country-desc">Descending order</label>
            </div>
            <div>
              <input
                type="radio"
                id="country-asc"
                name="country-asc"
                value="country-asc"
              />
              <label htmlFor="country-asc">Ascending order</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Role Type</legend>
            <div>
              <input
                type="checkbox"
                id="role-python"
                name="role-python"
                value="role-python"
              />
              <label htmlFor="role-python">Python</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="role-web"
                name="role-web"
                value="role-web"
              />
              <label htmlFor="role-web">Web</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Voyage Role</legend>
            <div>
              <input
                type="checkbox"
                id="voyage-role-dev"
                name="voyage-role-dev"
                value="voyage-role-dev"
              />
              <label htmlFor="voyage-role-dev">Developer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="voyage-role-ui"
                name="voyage-role-ui"
                value="voyage-role-ui"
              />
              <label htmlFor="voyage-role-ui">UI/UX Designer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="voyage-role-scrum"
                name="voyage-role-scrum"
                value="voyage-role-scrum"
              />
              <label htmlFor="voyage-role-scrum">Scrum Master</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="voyage-role-owner"
                name="voyage-role-owner"
                value="voyage-role-owner"
              />
              <label htmlFor="voyage-role-owner">Product Owner</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Solo Project Tier</legend>
            <div>
              <input
                type="checkbox"
                id="solo-tier-1"
                name="solo-tier-1"
                value="solo-tier-1"
              />
              <label htmlFor="solo-tier-1">Tier 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="solo-tier-2"
                name="solo-tier-2"
                value="solo-tier-2"
              />
              <label htmlFor="solo-tier-2">Tier 2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="solo-tier-3"
                name="solo-tier-3"
                value="solo-tier-3"
              />
              <label htmlFor="solo-tier-3">Tier 3</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-4">
            <legend>Voyage Tier</legend>
            <div>
              <input
                type="checkbox"
                id="voyage-tier-1"
                name="voyage-tier-1"
                value="voyage-tier-1"
              />
              <label htmlFor="voyage-tier-1">Tier 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="voyage-tier-2"
                name="voyage-tier-2"
                value="voyage-tier-2"
              />
              <label htmlFor="voyage-tier-2">Tier 2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="voyage-tier-3"
                name="voyage-tier-3"
                value="voyage-tier-3"
              />
              <label htmlFor="voyage-tier-3">Tier 3</label>
            </div>
          </fieldset>
        </div>
        <div>
          <input type="range" name="voyage" id="voyage" min="0" max="60" />
          <label htmlFor="voyage">Voyage</label>
        </div>
      </form>
      <div className="buttons mt-4">
        <button type="submit" className="mr-4">Submit</button>
        <button>Clear</button>
      </div>
    </>
  );
}
