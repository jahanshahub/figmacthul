import React from "react";
import styled from "styled-components";
import { InterNormalWhite129px } from "../../styledMixins";


function Group48(props) {
  const { logoBlack1, className } = props;

  return (
    <Group481 className={`group-48 ${className || ""}`}>
      <BuiltOn className="built-on">Built on</BuiltOn>
      <LogoBlack1 className="logo-black-1" src={logoBlack1} />
    </Group481>
  );
}

const Group481 = styled.div`
  width: 104.1208724975586px;
  height: 35.00011444091797px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  &.group-48.group-48-2 {
    width: 104px;
    align-items: flex-start;
    min-height: 35px;
    height: unset;
  }

  &.group-48.group-48-3 {
    width: 104px;
    align-items: flex-start;
    min-height: 35px;
    height: unset;
  }
`;

const BuiltOn = styled.div`
  ${InterNormalWhite129px}
  width: 72.38948059082031px;
  height: 15.512031555175781px;
  letter-spacing: 0;
`;

const LogoBlack1 = styled.img`
  margin-left: -0.2px;
  width: 102.1208724975586px;
  height: 12.378173828125px;
  margin-top: 7px;
`;

const LogoBlack11 = styled.img`
  .group-48.group-48-1 & {
    width: 102.120849609375px;
  }
`;

const BuiltOn1 = styled.div`
  ${InterNormalWhite129px}

  .group-48.group-48-2  & {
    width: 72px;
    min-height: 16px;
    height: unset;
  }
`;

const LogoBlack12 = styled.img`
  .group-48.group-48-2 & {
    width: 102px;
    height: 12px;
    margin-top: 7px;
    margin-left: -0.44px;
  }
`;

const BuiltOn2 = styled.div`
  ${InterNormalWhite129px}

  .group-48.group-48-3  & {
    width: 72px;
    min-height: 16px;
    height: unset;
  }
`;

const LogoBlack13 = styled.img`
  .group-48.group-48-3 & {
    width: 102px;
    height: 12px;
    margin-top: 7px;
    margin-left: -0.44px;
  }
`;

export default Group48;
