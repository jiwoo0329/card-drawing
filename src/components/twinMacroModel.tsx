import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const TestDiv = styled.div`
  ${tw`bg-red-500`}
`;

const ToggleInput = styled.input(({ toggle }: { toggle: boolean }) => [
  toggle ? tw`-translate-x-6 bg-white ` : tw`translate-x-0 bg-blue-400 `,
  tw`
  focus:outline-none
  w-6
  h-6
  rounded-full
  absolute`,
]);

export default function twinMacroModel() {
  return (
    <div>
      <TestDiv>테스트</TestDiv>
      <ToggleInput type="text" toggle={false}></ToggleInput>
    </div>
  );
}
