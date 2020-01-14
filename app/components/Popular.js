import React, { Component, Fragment } from 'react';
import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import { fetchPopularRepos } from '../helpers/api';

//const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

export default class Popular extends Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({ selectedLanguage: language });
    fetchPopularRepos(language).then(repos => this.setState({ repos }));
  }

  render() {
    return (
      <Fragment>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {this.state.repos ? (
          <RepoGrid repos={this.state.repos} />
        ) : (
          <h3 style={{ textAlign: 'center' }}>Loading...</h3>
        )}
      </Fragment>
    );
  }
}
