import React, { useState } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";



function App() {
  const [blurCount, setBlurCount] = useState(0);

  const StyledButton = styled.button`
    &:hover {
      color: red;
    }`;

  const StyledSpan = styled.span`
  button:hover {
    color: red;
  }`;

  return (
    <div>
      <div>Blurs: {blurCount}</div>
      <input onBlur={() => setBlurCount(blurCount + 1)} />

      <h4>Regular button:</h4>
      <button onClick={() => alert("clicked")} type="button">
        You can click me any time
      </button>

      <h4>Styled component button:</h4>
      <StyledButton onClick={() => alert("clicked")} type="button">
        You can't click me after blur
      </StyledButton>

      <h4>StyleWrapped button:</h4>
      <StyledSpan>
        <button onClick={() => alert("clicked")} type="button">
          You can't click me after blur
        </button>
      </StyledSpan>

      <h4>Imported StyleWrapped button:</h4>
      <SubmitButton></SubmitButton>
    </div>
  );
}

export default App;

