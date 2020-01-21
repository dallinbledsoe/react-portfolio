import React, { Component } from "react";
import axios from 'axios';




export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    }
  }

  componentWillMount() {
    this.getPortfolioItem()
  }

  getPortfolioItem() {
    axios.get(`https://dallinbledsoe.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true }).then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    })
    .catch(error => {
      console.log("getportfolioitem eroor", error)
    })
  }


  render() {
    const {
name,
description,
url,
category,
position,
thumb_image_url,
banner_image_url, 
logo_url

    } = this.state.portfolioItem
  return (
      <div className="portfolio-detail-wrapper">
        <div className="banner">
          <img src={logo_url} />
        </div>
        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>
        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
            </a>
        </div>
      </div>
  );
}
}