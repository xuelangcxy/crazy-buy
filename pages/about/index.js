import Header from '../../components/Header';

const About = () => (
  <div>
    <Header></Header>
    <p>this is about page!</p>
  </div>
);

// About.getInitialProps = async props => {
//   Object.keys(props).forEach(key => {
//     console.log(key);
//   });
//   return {};
// }

export default About;
