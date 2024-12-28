import DCNNimg from "../assets/DCNNimg.jpg";
import FCimg from "../assets/FCimg.jpg";
import ANFgif from "../assets/ANFgif.gif";
import PRJAgif from "../assets/PRJAgif.gif";
import Oddclovergif from "../assets/oddclover.gif";
import NPgif from "../assets/NPgif.gif";
import ThreeDgif from "../assets/3Dgif.gif";

export const ProjectList = [

  {
    name: "Sportsbetting Analytics Site",
    image: Oddclovergif,
    skills: "TypeScript, React, Node.js, AWS, GCP, HTML/CSS",
    github: "",
    link: "https://bit.ly/3BMGhjj",
    summary: "Developed a comprehensive sports betting analytics platform that combines real-time odds aggregation with predictive modeling. Built automated data pipelines to collect and analyze betting odds across multiple sports books, implementing an arbitrage calculator to identify profitable betting opportunities. Integrated Stripe payment processing for premium subscription services. The platform successfully serves 50+ monthly active users with real-time betting analytics and predictions.",
    documentation: "",
  },
  {
    name: "Ant Genus Identifier",
    image: DCNNimg,
    skills: "Python, Tensorflow, Keras, JupyterNotebooks",
    github: "https://github.com/hoon610/imageclassifier",
    link: "",
    summary: "Created a deep learning model to identify ant genera using specimen images from AntWeb. Built using TensorFlow and Keras, the model features a CNN architecture with three sets of convolution and max pooling layers, followed by dense layers with ReLU and sigmoid activations. Developed custom data processing pipelines to handle taxonomic images, including automated pruning using cv2 and imghdr.",
    documentation:
      "https://hoonkang.substack.com/p/creating-a-machine-learning-deep",
  },

  {
    name: "1951 Navajo Project Digitization",
    image: NPgif,
    skills: "Python, ArcGIS, JavaScript",
    github: "",
    link: "https://geodata-asu.hub.arcgis.com/apps/asu::1951-navajo-project-aerial-photos/about",
    summary:
      "Digitized and catalogued a set of aerial photographs of Navajo County, Arizona using an automated data pipeline. Contributed to a web index in ArcGIS deployed to a ready to use API.",
    documentation: "",
  },
  {
    name: "ASU Map and Geospatial Hub 3D Explorer",
    image: ThreeDgif,
    skills: "ArcGIS, Javascript",
    github: "https://github.com/mapgeoasu/3dexplorer",
    link: "https://mapgeoasu.github.io/3dexplorer/",
    summary:
      "Assisted in the digitization and creation of a 3D representation of ASU's Map and Geospatial Hub. The model allows for users to view digitized versions of maps that are available in an online repository.",
    documentation: "",
  },
  {
    name: "Ant Nuptial Flights Model",
    image: ANFgif,
    skills: "R, JavaScript",
    github: "https://github.com/hoon610/antnuptialflightmodel",
    link: "https://hoon610.github.io/antnuptialflightmodel/",
    summary:
      "Designed a model and a web app that pulls current weather data to predict the likelihood of ant nuptial flight occurences. Currently the true model is no longer available due to ethical reasons, but if you have any questions on how it was generated or how the data was sourced shoot me an email!",
    documentation: "",
  },

  {
    name: "Facebook Clone",
    image: FCimg,
    skills: "React, Node.js, Firebase, HTML/CSS",
    github: "https://github.com/hoon610/fb-clone",
    link: "https://hoonbook.netlify.app/",
    summary:
      "A Facebook clone built in React and Firebase. View in the link above using Google Authentication or as a guest user. It might be flagged as a phishing site on your browser for looking too good!",
    documentation: "",
  },
  {
    name: "Infinite Scrolling Rogue-like Game",
    image: PRJAgif,
    skills: "Unity, C#",
    github: "",
    link: "",
    summary: "Developed an infinitely scrolling 2D game inspired by Vampire Survivors using Unity. Built a tile-based world generation system that dynamically loads and unloads terrain tiles based on player position, creating the illusion of endless exploration. Implemented passive combat mechanics where players focus solely on movement while abilities trigger automatically, following Vampire Survivors' gameplay style. Made for my friends.",
    documentation:
      "https://hoonkang.substack.com/p/how-to-create-an-infinitely-scrolling",
  },
];
