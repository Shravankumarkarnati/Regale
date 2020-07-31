import React from "react";
import "./results.styles.scss";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

import { connect } from "react-redux";

const ResultsPage = ({ searchResultsState: results }) => {
  return (
    <div className="resultsPage">
      <Header />
      <Results results={results} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResultsState: state.results.results,
  };
};

export default connect(mapStateToProps)(ResultsPage);
