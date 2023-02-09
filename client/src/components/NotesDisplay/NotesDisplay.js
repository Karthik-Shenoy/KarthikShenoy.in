import React from "react";

const PDFViewer = ({ src }) => {
  return (
    <>
      <object data={src} type="application/pdf" width="100%" height="100%">
        <p>
          It appears your web browser doesn't support PDFs.
          <a href={src}>Download the PDF</a> instead.
        </p>
      </object>
    </>
  );
};

export default PDFViewer;
