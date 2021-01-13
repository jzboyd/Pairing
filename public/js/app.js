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
      <form onSubmit={this.handleSubmit}
    )
  }
}
