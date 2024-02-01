import React from "react";
import NavBar from "../components/navBar";
import SEO from "../components/SEO/SEO";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Layout from "../layout";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import years from "../../data/years";

const styles = {
  width: "90%",
  margin: "0 auto",
  maxWidth: "800px",
};


function processYears(years) {
  return Object.keys(years).reverse().map((year) => {
    return (
      <Card
      style={{ width: "90%", margin: "10px auto", maxWidth: "800px" }}
    >
        <CardContent>
          <div>
            <p><a href={`/blog/yearly-recap-${year}?pass=${years[year]}`}>{year}</a>: <b>{years[year]}</b></p>
          </div>
        </CardContent>
      </Card>
    );
  });
}

class YearsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: ""
    };
  }

  render() {
    const pageSEO = {
      title: `Years | ${config.siteTitle}`,
      description: `My Yearly blogs shortcuts.`,
    };
    const {guess} = this.state;
    if (guess !== 'facebook') {
      return ( 
        <Layout>
          <div style={{
              textAlign: "left",
              backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`,
              padding: "1em 0",
            }}
          >
            <Card
              style={{ width: "90%", margin: "10px auto", maxWidth: "800px" }}
            >
              <CardContent>
                <TextField
                  fullWidth 
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  onChange={(e) => this.setState({guess: e.target.value})}
                />
              </CardContent>
            </Card>
          </div>
        </Layout>       
      )
    }
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO} />
        <NavBar
          style={{ background: config.secondary.dark }}
          location={this.props.location}
        />
        <div
          style={{
            textAlign: "center",
            backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`,
            padding: "1em 0",
          }}
        >
          <div style={styles}>
            {processYears(years)}
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default YearsPage;
