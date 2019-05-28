import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div id="body">
      <div>
        <button onClick={() => setCount(count + 1)} type="button">
          {count}
        </button>
      </div>
    </div>
  );
}

export default App;
