import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_2l6pHHnps", // pool OIDC URL
  client_id: "5i1bgl7dfvogbeir121po1hbb4", // your App Client ID
  redirect_uri: "http://localhost:5173", // must match Cognito callback URL
  post_logout_redirect_uri: "http://localhost:5173", // must also match Cognito redirect URL
  response_type: "code",
  scope: "openid email",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

