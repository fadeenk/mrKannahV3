import React from "react";
import Helmet from "react-helmet";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const cardStyles = {
      width: '90%',
      margin: '0 auto',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <Header />
        <div id="about" style={{padding: '10px 0', backgroundColor: config.primary.light}}>
          <Card style={cardStyles}>
            <CardHeader title="About Me"/>
            <CardContent>
              <p>I currently am the Chief Technology Officer at <a href="https://coursekeyeducation.com/" rel="noopener noreferrer" target="_blank">CourseKey Education</a>, which is where my passion for technology, learning,
                and entrepreneurship converge. Additionally, I am the owner of Kannah Consulting and Software Services (licensed in city of El Cajon), which allows me to work with different companies and startups.</p>
              <p>I studied computer engineering and science at San Diego State University, where I co-founded a student software development
                firm called <a target="_blank" rel="noopener noreferrer" href="http://hitechedventures.org/">HiTech EdVentures (HTEV)</a>.
                Over the years, I developed software and consulted for multiple industries, including Healthcare, Home
                Services, Entertainment, Automobile, and Education.</p>
              <p>Currently, I am accepting freelance work. I'd love to get coffee and get to know you, so don’t hesitate
                to get in touch.</p>
            </CardContent>
          </Card>
          <Card style={{...cardStyles, marginTop: '20px'}}>
            <CardHeader title="Consulting Services"/>
            <CardContent>
              <p>I offer consulting services for:</p>
              <ul>
                <li>Software architecture / design consultations</li>
                <li>Team coaching</li>
                <li>Agile coaching</li>
                <li>Personal career coaching and mentorship</li>
                <li>Individual 1-on-1 coaching</li>
                <li>Speaking and training</li>
              </ul>
              <p>Something else? Just ask! I do offer some daily, weekly and monthly retainer rates.</p>
            </CardContent>
          </Card>
        </div>
        <div style={{backgroundImage: `linear-gradient(${config.primary.light}, ${config.secondary.dark}`}}>
          <Showcase />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Index;
