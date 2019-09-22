import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import goals from '../../data/goals';

const styles = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
};

function processGoals(goalsArray) {
  return goalsArray.map(goal => {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {goal.completed ? <del>{goal.goal}</del> : goal.goal}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{goal.description}</ExpansionPanelDetails>
      </ExpansionPanel>
    )
  })
}

class GoalsPage extends React.Component {
  render() {
    const pageSEO = {
      title: `Goals | ${config.siteTitle}`,
      description: `My Goals.`,
    };
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO}/>
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{ textAlign: 'center', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          {Object.keys(goals).map((category) => (
            <div style={styles}>
              <h2>{category}</h2>
              {processGoals(goals[category])}
            </div>
          ))}
        </div>
        <Footer />
      </Layout>
    )
  }
};

export default GoalsPage;
