import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function about() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Lucas Angulski</span>
              </p>
              <h2 className="about__heading">A Junior Data Analyst</h2>
              <div className="about__info">
                <PText>
                  I am an Industrial Engineer currently working to switch my
                  career into Data Science. My first contact with code was in
                  college where I learned C++ as a programming language. It took
                  a while to spark interest for coding back then because I had
                  no idea how to implement coding in my work.Since I started
                  working at industries, I had to deal with tons of data by only
                  using MS Excel. Unfortunatly Excel does not handle very well a
                  lot of info, trust me, if you have a file over 10MB the
                  program will struggle and what was supposed to be quick data
                  analysis, it is (VERY) slow. By the year of 2021 a work
                  college spoke about how easy was to analyse data using Python
                  (back then I only used Minitab and Excel to extract
                  statistical information from data) and at this moment I
                  started my journey through Data Analytics. I did not take long
                  for me to fall in love with it, and start studing every day. I
                  joined a Bootcamp in the second semester of 2021 to help me
                  build my hard skills which can be seen in my projects. I am a
                  very curious person (this is how I also started studying Web
                  Dev as a hobby and was able to build this website) and love
                  teamwork, so if you think I match your team criteria please
                  get in touch !
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="Lucas A" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={['Kings High School, OH USA.']}
              />
              <AboutInfoItem
                title="College"
                items={['Pontifical Catholic University of Paraná']}
              />
              <AboutInfoItem title="BS" items={['Industrial Engineering']} />
              <AboutInfoItem
                title="Bootcamp"
                items={['Ironhack - Data Analytics']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="Data Analysis"
                items={['Python', 'Pandas', 'Scikitlearn', 'Numpy']}
              />
              <AboutInfoItem
                title="Data Vis."
                items={[
                  'Matplotlib',
                  'Seaborn',
                  'Tableau',
                  'Power BI',
                  'Streamlit',
                ]}
              />
              <AboutInfoItem
                title="Database"
                items={['MySQL', 'PostegreSQL']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem title="2021-2021" items={['Logistics Analyst']} />
              <AboutInfoItem
                title="2019-2020"
                items={['Product Engineering Trainee']}
              />
              <AboutInfoItem
                title="2018-2019"
                items={['Quality Assurance Apprentice']}
              />
            </div>
          </div>
          <ContactBanner />
        </div>
      </AboutPageStyles>
    </>
  );
}
