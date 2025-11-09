import { useContext } from "react";
import UserContext from "../UserContext";
import UserDetails from "./UserDetails";

function UserInfo() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h3>User Info</h3>
      <UserDetails userData={userData} />
    </div>
  );
}

export default UserInfo;
