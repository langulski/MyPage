import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import ProjectItem from '../components/ProjectItems';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchbar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchbar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [projectsData, setProjectsData] = useState(ProjectInfo);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectInfo);
    }
  };

  return (
    <>
      <ProjectsStyles>
        <div className="container">
          <SectionTitle heading="Projects" subheading="some of my recent" />
          <div className="projects__searchbar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ProjectsStyles>
      <Footer />
    </>
  );
}
