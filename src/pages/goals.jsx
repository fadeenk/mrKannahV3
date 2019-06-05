import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

const goals = [{
  goal: 'Become an engineer',
  description: 'Childhood goal to become an engineer. Over time it got more specific and decided to become a computer engineer. Although, was working professionally as an engineer I wanted to make it official. As of May 2019, I am a SDSU Alumni Computer engineer.',
  done: true,
}, {
  goal: 'Be in a newspaper',
  description: <p>Part of me always wanted to have my face in a newspaper. That first became true when I was recognized
    as <a href="https://newscenter.sdsu.edu/sdsu_newscenter/news_story.aspx?sid=75337">a leader in STEM by SDSU</a>.
    Soon after my name and app were in <a
      href="http://thedailyaztec.com/47880/opinion/course-snatcher-app-is-an-unfair-advantage/">the school's paper</a>.
    After that my name and picture became associated with coursekey and can be found in bunch of papers, articles and
    even places I didn't expect.</p>,
  done: true,
}, {
  goal: 'Publish technical content',
  description: <p>Done a little bit on different places, <a href="https://medium.com/@fadeekannah">medium</a>, <a href="https://dev.to/fadeenk">dev.to</a> and mostly on my <a href="/blog">blog</a>.</p>,
  done: true,
}, {
  goal: 'Understand my financial situation',
  description: 'Have a better understanding of where I stand financially. Have a map to get out of dept. Have assets evaluated and documented. Have budget plan.',
  done: false,
}, {
  goal: 'Have a retirement plan',
  description: 'Ensure easy retirement is possible',
  done: false,
}, {
  goal: 'Become financially independent',
  description: 'Won\'t have to worry about money',
  done: false,
}, {
  goal: 'Live in three countries',
  description: 'Iraq, Turkey and USA',
  done: false,
}, {
  goal: 'Visit 10 countries',
  description: 'Mexico',
  done: false,
}, {
  goal: 'Become a millionaire',
  description: '',
  done: false,
}, {
  goal: 'Publish a book',
  description: '',
  done: false,
}, {
  goal: 'Buy a house',
  description: '',
  done: true,
}, {
  goal: 'Buy a second house',
  description: '',
  done: false,
}, {
  goal: 'Visit Japan',
  description: '',
  done: false,
}, {
  goal: 'Start my own business',
  description: '',
  done: true,
}, {
  goal: 'Become venture backed business',
  description: '',
  done: true,
}, {
  goal: 'Have multiple incomes',
  description: '',
  done: false,
}, {
  goal: 'Invent new things',
  description: '',
  done: true,
}, {
  goal: 'Have a patent',
  description: '',
  done: true,
}, {
  goal: 'Have a second patent',
  description: '',
  done: false,
}, {
  goal: 'Stay healthy',
  description: '',
  done: false,
}, {
  goal: 'Enjoy my time',
  description: '',
  done: false,
}, {
  goal: 'Grow my network',
  description: '',
  done: false,
}];

const styles = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
};

class GoalsPage extends React.Component {
  render() {
    const pageSEO = {
      title: `Goals | ${config.siteTitle}`,
      description: `My Goals.`,
    };
    const items = goals.map(item => {
      return (<ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {item.done ? <del>{item.goal}</del> : item.goal}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{item.description}</ExpansionPanelDetails>
      </ExpansionPanel>)
    });
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO}/>
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{ textAlign: 'center', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          <div style={styles}>{items}</div>
        </div>
        <Footer />
      </Layout>
    )
  }
};

export default GoalsPage;
