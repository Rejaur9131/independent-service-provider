import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className="row g-4 p-4 bg-light text-center">
      <Card className="rounded">
        <Card.Body>
          <Card.Title>
            <em>Authorization and Authentication</em>
          </Card.Title>
          <Card.Text>
            <strong>Authentication:</strong> Authentication verifies who the user is. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changeable by the user.
          </Card.Text>
          <Card.Text>
            <strong>Authorization:</strong> Authorization determines what resources a user can access. Authorization works through settings that are implemented and maintained by the organization. Authorization always takes place after authentication.Authorization always takes place after authentication.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="rounded">
        <Card.Body>
          <Card.Title>
            <strong>Why firebase?</strong>
          </Card.Title>
          <Card.Text>Create application without backend server. No need extra money spent for backend server. Sync real time data in the application. Quick display data in the application. Faster than any backend web services.</Card.Text>
          <Card.Title>
            <strong>Other options:</strong>
          </Card.Title>
          <Card.Text>Auth0, Mongodb, Passport, Okta etc...</Card.Text>
        </Card.Body>
      </Card>
      <Card className="rounded">
        <Card.Body>
          <Card.Title>
            <strong>Services firebase provide other than authentication:</strong>
          </Card.Title>
          <Card.Text>Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, etc...</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
