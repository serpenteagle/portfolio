import bigPic from '../assets/holo-render.jpg';
import holoCad from '../assets/holo-cad.jpg';
import holoFea from '../assets/holo-fea.jpg';
import holoAssembly from '../assets/holo-assembly.jpg';
import holoWiring from '../assets/holo-wiring.jpg';
import holoFinal from '../assets/holo-final.jpg';

import galleryIcon from '../assets/gallery-icon.svg';

export default {
  title: 'Holonomic Robot',
  summary:
    'In 2016 Robert Bosch LLC approached several robotics teams in the area with the task of creating a robotic drivebase capable of carrying up to 200 lbs. The robot would be used as part of a demo planned to show at the Detroit International Auto Show. A week was given to all teams to create a design proposal. The winning team would be awarded $2000 to create the final product. As the lead engineer of the project, I designed the robot and created a proposal within 5 days. Impressed with the proposal, Bosch promptly awarded our team the project. After completing the design and drawings, we quickly went to work fabricating and programming the robot. After a week and a half of work, the project was finished and delivered. It went on to premier at several events, including CES at Las Vegas.',
  bigPic: {src: bigPic},
  slices: [
    {
      src: holoCad,
      text:
        'The robot was completely designed in Dassault Systemes Solidworks in 5 days. Detailed drawings were created for each and every part in order to faucilitate precision manufacturing.',
    },
    {
      src: holoFea,
      text:
        'In order to ensure the safety of the design, the superstructure was put to the test using finite element analysis (FEA). A stress and deformation analysis was generated and the safety of the design was ensured.',
    },
    {
      src: holoAssembly,
      text:
        'The superstructure and drivetrain was machined, assembled, and welded completely in house. Riveted construction allowed for rapid assembly and quelled the need for a welding jig.',
    },
    {
      src: holoWiring,
      text:
        'The electrical systems were wired and soldered by hand. Programming and testing was done with the aid of a test bench.',
    },
    {
      src: holoFinal,
      text:
        'With everything ready and tested, the robot was delivered to Bosch with great success.',
    },
  ],
  links: [
    {
      text: 'View Gallery',
      src: galleryIcon,
      href: 'https://goo.gl/photos/5EEE6o2sPivvAmh16',
    },
  ],
};
