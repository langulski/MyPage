/* eslint-disable react/no-unused-state */
import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import NewTag from './NewTag';

const TagStyles = styled.div`
  padding: 2rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 2rem;
  }
  .SkillSection__right,
  .SkillSection__left {
    flex: 1;
    display: flex;
  }

  .tag-cloud-container {
    .wrapper {
      forced-color: active;
      p {
        forced-color-adjust: auto;
        color: black;
      }
    }
  }

  .tag-cloud-container {
    padding: 150px;
    align-items: left;
    margin-bottom: 4rem;
  }
  .SkillTitle_space {
    padding: 4rem 0;
    margin-top: 2rem auto;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 950px) {
    .SkillSection__left {
      flex: 1;
    }
    .SkillSection__right {
      flex: 2;
    }
  }
`;
export default class Tagtest extends React.Component {
  render() {
    const tagName = [
      'Python',
      'JavaScript',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'MySQL',
      'Sklearn',
      'PostgreSQL',
      'Excel',
      'Streamlit',
      'TensorFlow',
      'Tableau',
    ];
    // eslint-disable-next-line no-unused-vars

    const repeat = `${tagName.join(',')},`
      .repeat(2)
      .split(',')
      .filter((t) => !!t);
    return (
      <TagStyles>
        <div className="SkillTitle_space">
          <SectionTitle subheading="Some of" heading="My Skills" />
        </div>
        <div className="container">
          <div className="SkillSection__right">
            <NewTag />
          </div>

          <div className="SkillSection__left">
            <PText>
              These are some of my hard skills, as you notice there are few
              skills that are not related to Data Analytics, and that's because
              as a hobby I study web dev.
            </PText>
          </div>
        </div>
      </TagStyles>
    );
  }
}
