import React from "react";
import Profile from "./Profile";

const UserInfo = () => {
    return (
        <div className="user-wrapper">
            <div className="user-stats">
                <div className="stats-left">
                    <h4>Name:</h4>
                    <p>John Doe</p>
                    <h4>Job Title: </h4>
                    <p>Intern</p>
                    <h4>Mail: </h4>
                    <p>john.doe@something.se</p>
                </div>
                <div className="stats-right">
                    <h4>mobilePhone:</h4>
                    <p>+46733001122</p>
                    <h4>ID:</h4>
                    <p>ee34ep-282a-4b5f-b41a-967c6vc9-43oslv</p>
                    <h4>Manager: </h4>
                    <p>Fredrik Sydvart</p>
                </div>
            </div>
            <div className="user-profile">

                <Profile />

            </div>
        </div>
    );
};

export default UserInfo;
