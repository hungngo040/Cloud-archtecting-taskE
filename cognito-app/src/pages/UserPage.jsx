export default function UserPage({ auth }) {
  if (!auth.isAuthenticated) {
    return (
      <div>
        <h2>User Page</h2>
        <p>You are not logged in.</p>
        <button onClick={() => auth.signinRedirect()}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>User Page</h2>
      <p>Welcome {auth.user?.profile.email}!</p>
      <button onClick={() => auth.signoutRedirect()}>Logout</button>
    </div>
  );
}

