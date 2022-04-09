import React from "react";
import Group48 from "../Group48";
import styled from "styled-components";
import { InterLightWhite16px, InterNormalWhite80px } from "../../styledMixins";


function Headline(props) {
  const { className, group48Props } = props;

  return (
    <Headline1 className={`headline ${className || ""}`}>
      <WelcomeToCthulhuClub className="welcome-to-cthulhu-club" id="welcome-to-cthulhu-club">
        Welcome to Cthulhu Club
      </WelcomeToCthulhuClub>
      <CthulhuWelcomesYou className="cthulhu-welcomes-you">
        Cthulhu welcomes you to the newest NFT craze in community building and passive income. Learn more about the
        Cthulhu Club and how you can join this exciting new community of Cthulhus!
      </CthulhuWelcomesYou>
      <Group48 logoBlack1={group48Props.logoBlack1} className={group48Props.className} />
    </Headline1>
  );
}

const Headline1 = styled.div`
  position: absolute;
  width: 670px;
  height: 320px;
  top: 439px;
  left: 343px;
  display: flex;
  flex-direction: column;

  &.headline.headline-1 {
    top: 346px;
    left: 252px;
    align-items: flex-start;
    min-height: 320px;
    height: unset;
  }

  &.headline.headline-2 {
    align-items: flex-start;
    min-height: 320px;
    height: unset;
  }
`;

const WelcomeToCthulhuClub = styled.div`
  ${InterNormalWhite80px}
  width: 634px;
  height: 198px;
  letter-spacing: 0;
`;

const CthulhuWelcomesYou = styled.p`
  ${InterLightWhite16px}
  height: 78px;
  margin-top: 50px;
  letter-spacing: 0;
  line-height: 25.6px;
`;

const WelcomeToCthulhuClub1 = styled.div`
  ${InterNormalWhite80px}

  .headline.headline-1  & {
    min-height: 198px;
    height: unset;
  }
`;

const CthulhuWelcomesYou1 = styled.p`
  ${InterLightWhite16px}

  .headline.headline-1  & {
    width: 670px;
    min-height: 78px;
    height: unset;
  }
`;

const WelcomeToCthulhuClub2 = styled.div`
  ${InterNormalWhite80px}

  .headline.headline-2  & {
    min-height: 198px;
    height: unset;
  }
`;

const CthulhuWelcomesYou2 = styled.p`
  ${InterLightWhite16px}

  .headline.headline-2  & {
    width: 670px;
    min-height: 78px;
    height: unset;
  }
`;

export default Headline;
