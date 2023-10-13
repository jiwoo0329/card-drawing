import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import tw from "twin.macro";

const Layout = styled.div`
  ${tw`bg-gray-200 w-full h-screen`}

  main {
    ${tw`w-[500px] h-full bg-white my-0 mx-auto flex flex-row items-center`}
    overflow:hidden;
    section {
      ${tw`border-solid w-full relative`}
    }
  }
`;

const rotate_image = keyframes`

    0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotate = keyframes`

    0%{
    transform: translate(-100%, -100%) rotate(0deg);
  }
  50%{
    transform: translate(-100%, -100%) rotate(180deg);
  }
  100%{
    transform: translate(-100%, -100%) rotate(360deg);
  }
`;

const CardDack = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  margin: 0 auto;
  position: relative;

  /* animation: ${rotate_image} 60s linear infinite; */
  transform-origin: center center;
  display: flex;
  border-radius: 100%;
  img {
    diplay: inline-block;
    position: absolute;
    top: -160px;
    /* transform: rotate(-10deg); */

    transform-origin: bottom;
    /* animation: ${rotate_image} 20s linear infinite; */
  }
`;

function App() {
  return (
    <Layout>
      <main>
        <section>
          <CardDack>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, idx) => (
              <img
                key={idx}
                src="/images/cardBack.png"
                alt="카드!!"
                width={100}
                height={150}
                // style={{marginLeft:'0px'}}
                style={{
                  marginLeft: `${50 * item}px`,
                  // transform: `rotate(${100 * item}px, ${10 * item}px)`,
                }}
              />
            ))}
          </CardDack>

          <div>
            <button type="button">mix</button>
            <button type="button">reset</button>
            <button type="button">ok</button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;
