import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import { GiBroom } from 'react-icons/gi';
import { BiData } from 'react-icons/bi';
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
        <SectionTitle heading="Do" subheading="Some of things I can" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<BiData />}
            title="Data Analysis"
            desc="                                 "
          />
          <ServicesSectionItem
            icon={<GiBroom />}
            title="Data Cleaning"
            desc="                                 "
          />
          <ServicesSectionItem
            icon={<AiOutlineRobot />}
            title="Machine Learning"
            desc=" "
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
