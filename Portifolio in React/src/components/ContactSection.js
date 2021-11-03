import React from 'react';
import { MdEmail } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';
import Footer from './Footer';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
  }

  @media only screen and (max width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    right {
      max-width: 100%;
    }
    right {
      padding: 4rem 2 rem 2 rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="Contact" subheading="get in touch" />
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoItem
                icon={<MdEmail />}
                text="lucas.angulski@gmail.com"
              />
              <ContactInfoItem
                icon={<GrGithub />}
                text="https://github.com/langulski"
              />
            </div>
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSectionStyle>
      <Footer />
    </>
  );
}
