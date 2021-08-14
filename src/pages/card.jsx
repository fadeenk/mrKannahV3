import React, {Component} from "react";
import NavBar from "../components/navBar";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import qr from '../../static/qr.jpg';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Language from "@material-ui/icons/Language";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/Github";
import PersonAddAltIcon from '@material-ui/icons/PersonAddOutlined';

import ProfilePicture from "../components/Header/profilePicture";
import {withStyles} from "@material-ui/core/styles";

class VirtualCard extends React.Component {
  render() {
    const pageSEO = {
      title: `Virtual Card | ${config.siteTitle}`,
      description: `Fadee Kannah's Virtual Card`,
    };
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
            <h1 style={{color: "white"}}>Fadee Kannah</h1>
            <Card style={{
                width: "90%",
                margin: "0 auto",
                lineHeight: "1.5em",
                maxWidth: "400px",
            }}>
                <CardContent>
                    <CardHeader role="heading" aria-level="1" title="Chief Technology Officer" style={{fontSize: '48px'}} />
                    <ProfilePicture style={{margin: "0 auto", display: 'block'}} />
                    <br/>
                    <div style={{display:'flex', justifyContent: 'space-between', margin: "0 10px"}}>
                        <IconLink link="tel:7023373306"><Phone style={{color: '#0072d4'}} /></IconLink>
                        <IconLink link="mailto:fadeekannah@gmail.com"><Email style={{color: '#b3404f'}}/></IconLink>
                        <IconLink link="https://mrkannah.com"><Language style={{color: '#393939'}} /></IconLink>
                    </div>
                    <div style={{display:'flex', justifyContent: 'space-between', margin: "0 10px"}}>
                        <IconLink link="https://www.linkedin.com/in/fadeek/"><LinkedIn style={{color:'#2867B2'}} /></IconLink>
                        <IconLink link="https://www.instagram.com/fadeekannah/"><Instagram style={{color: '#e64580'}} /></IconLink>
                        <IconLink link="https://github.com/fadeenk"><Github style={{color: 'black'}} /></IconLink>
                    </div>
                    <br/>
                    <Button variant="contained" className={this.props.classes.button} onClick={() => {
                        download("/fadeekannah.vcf", "fadeekannah.vcf");
                    }}>
                        <PersonAddAltIcon style={{marginRight: '10px'}}/>Add to Contacts
                    </Button>
                    <br/>
                </CardContent>
            </Card>
            <Card style={{
                width: "90%",
                margin: "0 auto",
                marginTop: "100px",
                lineHeight: "1.5em",
                maxWidth: "400px",
            }}>
                <CardContent>
                    <img src={qr} style={{width: "100%"}} />
                </CardContent>
            </Card>
        </div>
        <Footer />
      </Layout>
    );
  }
}

class IconLink extends Component {
    render() {
        return (<a href={this.props.link}>
            <IconButton>{this.props.children}</IconButton>
        </a>)
    }
}

export default withStyles({
    button: {
        margin: "2px",
        background: config.primary.light,
        "&:hover": {
            background: config.primary.dark,
            color: "white",
        },
    },
})(VirtualCard);

function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}
