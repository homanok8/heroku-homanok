import React from "react";

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_DB_HOST}</h1>
      <button
        type="button"
        onClick={() => {
          fetch("/api/data")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        get data
      </button>
      와 한번 만들어 봤어요!!~~~~~~ 빌드 안했다 여기서 빌드 안함
    </div>
  );
}

export default App;
