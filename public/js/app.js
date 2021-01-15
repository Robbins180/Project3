class App extends React.Component {
  state={
    name: "",
    vegtables:Boolean,
    meat:Boolean,
    topping: Boolean,
    image: "",
    taco:[]
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }
//Create
  create = event => {
    event.preventDefault();
    axios
    .post('/taco', this.state)
    .then(response =>
    this.setState({
      tacos: response.data,
      name:'',
      image:'',
      vegtables: Boolean,
      meat: Boolean,
      topping: Boolean,
      })
    )
  }
// Delete
  delete = event => {
  axios.delete('/taco/' + event.target.value).then(response => {
    this.setState({
      taco: response.data
      })
    })
  }
  componentDidMount = () => {
    axios.get("/taco").then((response) => {
      this.setState({
        taco: response.data,
      })
    })
  }
// Update
  update = event => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/taco/' + id, this.state).then(response => {
    this.setState({
      taco: response.data,
      name: '',
      image: '',
      vegtables: Boolean,
      meat: Boolean,
      topping: Boolean,
      })
    })
  }
    render = () => {
      return (
      <div className='html'>
        <h2>Whats on tuesdays menu</h2>
        <div className='Menu'>
        <form id ="makeTaco" onSubmit={this.create} >
          <label htmlFor ="name">Taco:</label><br/>
          <input type="text" name="name"id="name"     onChange={this.handleChange} value={this.state.name}/><br/>
          <label htmlFor ="vegtables">Vegtables:</label><br/>
          <input type="checkbox"  name="vegtables"id="vegtables"   onChange={this.handleChange} value={this.state.name}/><br/>
          <label htmlFor ="meat">Meat:</label><br/>
          <input type="checkbox" name="meat"id="meat"
          onChange={this.handleChange} value={this.state.name}/><br/>
          <label htmlFor ="image">Image:</label><br/>
          <input type="text" name="image"id="image"/><br/>
          <input type="submit" value='Add'/> <br/>
        </form>
        </div>
        <h2>Taco Results</h2>
          <ul>
            {this.state.taco.map((taco) => {
              return (
                <li key={taco._id}>
                {taco.name} <br />
                <img src={taco.image} alt={taco.name} />
                <div className='Edit feature'>
                <details>
                <summary>Make Changes</summary>
                <form id={taco.id} onSubmit={this.update}>
                  <label htmlFor='name'>Name</label>
                  <br />
                  <input type='text' placeholder={taco.name} id='name' onChange={this.handleChange} />
                  <br />
                </form>
                </details>
                </div>
                </li>
              )
            })}
          </ul>
      </div>
      )
    }
  } // Closing Tag to whole React Fn.
ReactDOM.render(<App></App>, document.querySelector('main'))
