import Profile from "./Profile";

const UserInfo = () => {
    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="user-stats">
              <h4>Mail: john.doe@something.se</h4>
              <h4>ID: ee34ep-282a-4b5f-b41a-967c6vc9-43oslv</h4>
              <h4>Goals: 4</h4>
          </div>
          <div className="user-profile">
            <Profile />
          </div>
        </div>

      </div>
    )
};

export default UserInfo;
