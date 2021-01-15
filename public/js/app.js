
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
         <div>

          <h2>Whats on tuesdays menu</h2>
          <form id ="makeTaco" onSubmit={this.create} >
          <label htmlFor ="name">Taco:</label><br/>
          <input type="text" name="name"id="name"/><br/>

          <label htmlFor ="vegtables">vegtables:</label><br/>
          <input type="checkbox"  name="vegtables"id="vegtables"/><br/>

          <label htmlFor ="meat">Meat:</label><br/>
          <input type="checkbox" name="meat"id="meat"
          onChange={this.handleChange} value={this.state.name}/><br/>

          <label htmlFor ="image">Image:</label><br/>
          <input type="text" name="image"id="image"/><br/>

          <input type="submit" value='Add'/> <br/>
          </form>
        </div>
      )
    }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
