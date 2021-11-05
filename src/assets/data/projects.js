import { v4 as uuidv4 } from 'uuid';
import machinelearn from '../images/machinelearn.JPG';
import Pygame from '../images/Pygame.JPG';
import webscrap from '../images/webscrap.JPG';
import sharkattack from '../images/sharkattack.JPG';
import chatbot from '../images/chatbot.PNG';
import pygame2 from '../images/pygame2.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Machine learn app',
    desc:
      "Machine-learning algorith able to predict Developer's salary around the world based on a survey given in Stackoverflow.Before coding, it was necessary to clean the database and remove the outliers. Technologies used: Pandas, Matplotlib, Sklearn, Numpy and Streamlit.",
    img: machinelearn,
    link: 'https://github.com/langulski/Machine-Learning-Web-app',
  },
  {
    id: uuidv4(),
    name: 'Pygame plataform',
    desc:
      'Created a game from scratch using Python (Pygame) only. Personal project in order to keep practicing my Python skills. This project helped me a lot to understand classes,sub-functions, code structure and coding best practices.',
    img: Pygame,
    link: 'https://github.com/langulski/Pygame-TransilvanianHunger',
  },
  {
    id: uuidv4(),
    name: 'Web Scraping',
    desc:
      ' This project is  composed in two parts: gathering data from an API or a webpage and storing into a database of some sort. After the data is set, it was created a data visualization using Tableau Public. For this project I used the following technologies:Pandas, Numpy, HTML, bs4, Regex and Tableau.',
    img: webscrap,
    link: 'https://github.com/langulski/SerialKiller-WebScraping',
  },
  {
    id: uuidv4(),
    name: 'shark attack data cleaning',
    desc:
      'The objective of this project was to apply different cleaning and  manipulation techniques to generate a cleaner CSV version of the dataset and analyse the data from Shark Attacks in order to answer a business question. The following technologies were used: Pandas, Regex, Matplotlib, Folium, Numpy, Geopy, Seaborn and Streamlit.',
    img: sharkattack,
    link: 'https://github.com/langulski/Shark-attack---data-analysis',
  },
  {
    id: uuidv4(),
    name: 'chat bot',
    desc:
      'A chatbot for a fictional store that helps customers to know more info about their orders (it was coded to understand Portuguese). The following technologies were used: Pytorch, Json and Numpy',
    img: chatbot,
    link: 'https://github.com/langulski/chatbot-in-Python',
  },

  {
    id: uuidv4(),
    name: 'Simple Pygame',
    desc:
      'My first game in Python, very basic mechanic were the player must avoid the obstacles by jumping',
    img: pygame2,
    link: 'https://github.com/langulski/Jumper-pygame',
  },
];

export default projects;
