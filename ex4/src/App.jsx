import React from "react";

function App() {
  /* Constants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return valueInDollars * DOLLAR_TO_DONG_RATIO;
  }

  return (
    <main>
      <h1>Currency Conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />
      </p>

      <p>
        <label>Value in Dong</label>
        <input disabled value={dollarToDong(valueDollars)} />
      </p>

      <p>
        <label>Value in Euro</label>
        <input disabled value={dollarToEuro(valueDollars)} />
      </p>
    </main>
  );
}

export default App;
