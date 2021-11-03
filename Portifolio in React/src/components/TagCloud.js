import React from 'react';
import TagCloud from 'react3dtagcloud';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';

const TagStyles = styled.div`
  padding: 10rem 0;
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

    const repeat = `${tagName.join(',')},`
      .repeat(2)
      .split(',')
      .filter((t) => !!t);
    return (
      <TagStyles
        Style={{
          width: '400px',
          padding: '150px',
        }}
      >
        <div className="SkillTitle_space">
          <SectionTitle subheading="Some of" heading="My Skills" />
        </div>
        <div className="container">
          <div className="SkillSection__right">
            <TagCloud
              className="Tag__cloud_style"
              tagName={repeat}
              radius={200}
            />
          </div>

          <div className="SkillSection__left">
            <PText>
              I am a freelance website designer and developer from Chittagong,
              Bangladesh. I create professional websites. I love art and always
              try to show unique views to the audience through my design.
            </PText>
          </div>
        </div>
      </TagStyles>
    );
  }
}
