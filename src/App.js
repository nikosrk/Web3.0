import React, {useState} from 'react'
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import './App.css';


function App() {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
  }


  return (
    <div className="App">
      <center>
        <div>
          <Document file="/icsd16164.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center>
    </div>
  );
}

export default App;