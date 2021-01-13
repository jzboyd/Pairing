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
      <div>
      <h2>Create Podcast</h2>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={this.handleChange} />
      <br />
      <label htmlFor="image">Image</label>
      <input type="text" id="image" onChange={this.handleChange} />
      <br />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" onChange={this.handleChange} />
      <br />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" onChange={this.handleChange} />
      <br />
      <input type="submit" value="update Podcast" />
      </form>
    <h2>List of Podcasts</h2>
    <ul>
    {this.state.podcasts.map((podcast) => {
        return(
          <li>
          {podcast.name}
          <img src={podcast.image} alt={podcast.name} />
          <button value={podcast._id} onClick={this.deletePodcast}>DELETE</button>
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
          <br />
          <input type="submit" value="update Podcast" />
          </form>
          </details>
          </li>
        )

      })}
      </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
