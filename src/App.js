import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "b8bc6c5cb3a0a69bc0770c648fbc73bc2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);
  return <div>Helo</div>;
};

export default App;
