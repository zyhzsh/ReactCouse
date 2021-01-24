import styled from "styled-components";
import { About } from "../styles";
import { useState } from "react";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion';
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            totam fugiat labore maxime fuga voluptatum saepe assumenda earum
            magnam et?
          </p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae blanditiis corrupti sit veritatis voluptate ratione.
          </p>
        </div>
      </Toggle>
      <Toggle title="Different Payment Method">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae blanditiis corrupti sit veritatis voluptate ratione.
          </p>
        </div>
      </Toggle>
      <Toggle title="What Product do you offer">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae blanditiis corrupti sit veritatis voluptate ratione.
          </p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
