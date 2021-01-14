class App extends React.Component {
  state = {
    name: '',
    image: '',
    category: '',
    description: '',
    podcasts: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios
    .post('/podcasts', this.state)
    .then((response) => {
      this.setState({
        podcasts: response.data,
        name: '',
        image: '',
        category: '',
        description: '', })
    })
  }

  deletePodcast = (event) => {
    axios
    .delete('/podcasts/' + event.target.value)
    .then((response) => {
      this.setState({
        podcasts: response.data,
      })
    })
  }

  updatePodcast = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
    .put('/podcasts/' + id, this.state)
    .then((response) => {
      this.setState({
        podcasts: response.data,
        name: '',
        image: '',
        category: '',
        description: '',
      })
    })
  }

  componentDidMount = () => {
    axios.get('/podcasts').then((response) => {
      this.setState({
        podcasts: response.data
      })
    })
  }

  render = () => {
    return (
      <div id="app">
      <hr/>
      <h2 id="subtitle">Add a Podcast</h2>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="name"><p className="input">Name</p></label>
      <input type="text" id="name" onChange={this.handleChange} />
      <br />
      <label htmlFor="image"><p className="input">Image</p></label>
      <input type="text" id="image" onChange={this.handleChange} />
      <br />
      <label htmlFor="category"><p className="input">Category</p></label>
      <input type="text" id="category" onChange={this.handleChange} />
      <br />
      <label htmlFor="description"><p className="input">Description</p></label>
      <input type="text" id="description" onChange={this.handleChange} />
      <br /><br />
      <input id="updatebtn" type="submit" value="Update Podcast" />
      </form>
    <h2 id="list">List of Great Podcasts</h2>
      <div id="podcastlist">
        <ul>
        {this.state.podcasts.map((podcast) => {
            return(
              <li>
              <p id="podname">{podcast.name}</p>
              <br />

              <p id="podcat">{podcast.category}</p>
              <br />

              <p id="poddesc">{podcast.description}</p>
              <br />

              <img src={podcast.image} alt={podcast.name} />
              <br/>
              <button value={podcast._id} onClick={this.deletePodcast}>DELETE</button>
              <br/><br/>
              <details>
              <summary>Edit this podcast</summary>
              <form id={podcast._id} onSubmit={this.updatePodcast}>
              <label htmlFor="name">Name</label>
              <br />
              <input
              type="text"
              id="name"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="image">Image</label>
              <br />
              <input
              type="text"
              id="image"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="category">Category</label>
              <br />
              <input
              type="text"
              id="category"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="description">Description</label>
              <br />
              <input
              type="text"
              id="description"
              onChange={this.handleChange}
              />
              <br /><br />
              <input id="updatebtn" type="submit" value="Update Podcast" />
              </form>
              </details>
              </li>
        )
      })}
      </ul>
      </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
