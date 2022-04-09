import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite8px } from "../../styledMixins";


function TextLink(props) {
  const { className } = props;

  return (
    <TextLink1 className={`text-link-6 ${className || ""}`}>
      <Roadmap className="roadmap-3">Roadmap</Roadmap>
    </TextLink1>
  );
}

const TextLink1 = styled.div`
  width: 62px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const Roadmap = styled.div`
  ${MontserratSemiBoldWhite8px}
  min-height: 28px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
  white-space: nowrap;
`;

export default TextLink;
