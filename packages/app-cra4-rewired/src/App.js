import React from "react";

import { Button, Card, Heading } from "library-treat";

const App = () => {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div>
      <Heading>Heading</Heading>
      <Button onClick={() => setShowInfo(!showInfo)}>Button</Button>
      <Card>Content {showInfo && <i>More information</i>}</Card>
    </div>
  );
};

export default App;
