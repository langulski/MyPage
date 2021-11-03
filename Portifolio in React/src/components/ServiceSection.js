import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="website Design"
            desc="Lorem lorem 
          lorem lorem lorem lorem
          lorem loremlorem lorem lorem"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Lorem lorem 
          lorem lorem lorem lorem
          lorem loremlorem lorem lorem"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="Lorem lorem 
          lorem lorem lorem lorem
          lorem loremlorem lorem lorem"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
