import React from 'react';
import styled from "styled-components";

class SubmitButton extends React.Component {
  
  render() {
    console.log("save button rendered")
    const StyledSpan = styled.span``;
    return (
      <StyledSpan>
        <button onClick={() => alert("clicked")} type="button">
          You can't click me after blur
        </button>
      </StyledSpan>
    )
  }
}

export default SubmitButton;
