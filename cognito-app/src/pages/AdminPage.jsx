export default function AdminPage({ auth }) {
  if (!auth.isAuthenticated) {
    return (
      <div>
        <h2>Admin Page</h2>
        <p>You are not logged in.</p>
        <button onClick={() => auth.signinRedirect()}>Login</button>
      </div>
    );
  }

  const groups = auth.user?.profile["cognito:groups"] || [];

  if (!groups.includes("admin")) {
    return (
      <div>
        <h2>Admin Page</h2>
        <p>Access denied. You are logged in as a normal user.</p>
        <button onClick={() => auth.signoutRedirect()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome Admin {auth.user?.profile.email}!</p>
      <button onClick={() => auth.signoutRedirect()}>Logout</button>
    </div>
  );
}

