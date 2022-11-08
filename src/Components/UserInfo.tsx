import Profile from "./Profile";

const UserInfo = () => {
  return (
    <div className="user-wrapper">
      <div className="user">
        <div className="user-stats">
          <p><strong>Mail:</strong> john.doe@something.se</p>
          <p><strong>ID:</strong> ee34ep-282a-4b5f-b41a-967c6vc9-43oslv</p>
          <p><strong>Goals:</strong> 4</p>
        </div>
        <div className="user-profile">
          <Profile />
        </div>
      </div>

    </div>
  )
};

export default UserInfo;
