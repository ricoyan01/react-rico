import React, { Component } from 'react';
import NewsUpdate from './newsupdate.jsx';
import './index.css'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
            "title": "Here's a phone you should get your kid instead of the iPhone",
            "description": "Looking to buy a phone for your kid as they head back to school? Your choices don't have to be limited to an iPhone — you should instead take a look at the Pixel 7a.",
            "url": "https://www.androidcentral.com/phones/heres-a-phone-you-should-get-your-kid-instead-of-the-iphone",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZzEgg4HBRSuj3M4MAWZwnR-1200-80.jpg",
            "publishedAt": "2023-09-06T08:32:28Z",
            "content": "A recent survey found that an overwhelming 87% of teens in the U.S. used an iPhone. That's an astonishing figure, and it basically means that nine out of 10 teens use an iPhone. So if you're thinking… [+4563 chars]"
        },
    ],
      loading: false,
      searchQuery: '', 
      filteredArticles: [], 
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.setState({ loading: true });

    fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-09-10&sortBy=popularity&apiKey=0d00d426d2ae4f07afb272e0b41ea809')
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data.articles,
          loading: false,
          filteredArticles: data.articles, 
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  handleSearchChange = event => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      this.filterArticles();
    });
  };

  filterArticles() {
    const { articles, searchQuery } = this.state;
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredArticles });
  }

  render() {
    return (
      <div className='container my-3'>
        {}
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <div className="row">
          {}
          {this.state.filteredArticles.map(element => (
            <div className="col-md-4" key={element.url}>
              <NewsUpdate
                title={element.title}
                key={element.url}
                newsUrl={element.url}
                description={element.description.slice(0, 100)}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;