import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  align-items: center;
  text-align: center;
  .servicesitem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
}) {
  return (
    <ItemStyles>
      <div className="servicesitem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
