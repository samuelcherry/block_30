import Login from "../components/Login";
import Register from "../components/Register";
import Account from "../components/Account";

export default function AccountPage() {
  const userKey = localStorage.getItem("current-user-key");

  return (
    <div className="account-section">
      {userKey ? (
        <Account />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}
