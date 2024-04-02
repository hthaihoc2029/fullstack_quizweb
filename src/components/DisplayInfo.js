import React, { useState } from "react";
import "./DisplayInfo.scss";
// import logo from "../logo.svg";

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div className={+user.age > 18 ? "red" : "green"} key={user.id}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfo;
