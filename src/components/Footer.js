import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">Copyright 2019 Prudential Book Store</div>
        <div className="acknowledgement">
          API Provided by&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.goodreads.com/"
          >
            Goodreads
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
