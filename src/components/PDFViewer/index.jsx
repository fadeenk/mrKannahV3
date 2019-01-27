import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "./pdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFViewer extends React.Component {
  componentWillMount() {
    this.setState({initialRender: true});
    this.handleResize();
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = (e) => {
    const width = e ? e.target.innerWidth : window.innerWidth;
    if (width < 600) {
      this.setState({width: window.screen.width * .9})
    } else {
      this.setState({width: 800})
    }
  };

  render() {
    return (
      <div className='container' >
        <Document file={{ url: this.props.url }}>
          <Page pageNumber={1} width={this.state.width}/>
        </Document>
      </div>
    )
  }
}


export default PDFViewer;
