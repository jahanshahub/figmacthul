import React from "react";
import styled from "styled-components";
import { InterLightWhite23px } from "../../styledMixins";


function Group632(props) {
  const { children, className } = props;

  return (
    <Group63 className={`group-63-1 ${className || ""}`}>
      <MintOut1111Cth className="mint-out-1111-cth-1">{children}</MintOut1111Cth>
    </Group63>
  );
}

const Group63 = styled.div`
  width: 268px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.group-63-1.group-64-1 {
    height: 645px;
    margin-left: 38px;
  }

  &.group-63-1.group-65-1 {
    height: 497px;
    margin-left: 38px;
  }
`;

const MintOut1111Cth = styled.div`
  ${InterLightWhite23px}
  height: 347.56097412109375px;
  margin-left: -2px;
  width: 265.504150390625px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

const DeployCthulhuAtt = styled.div`
  ${InterLightWhite23px}

  .group-63-1.group-64-1  & {
    height: 645.4703979492188px;
  }
`;

const ReleaseSneakPeak = styled.div`
  ${InterLightWhite23px}

  .group-63-1.group-65-1  & {
    height: 496.51568603515625px;
  }
`;

export default Group632;
