
class App extends React.Component {
  state={
    name: "",

    vegtables:Boolean,

     meat:Boolean,

    topping: Boolean,

    image: "",

    taco:[]

  }
  handleChage = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })

}

  create = (event) => {
     event.preventDefault();
     axios.post('/taco',this.state).then((response) => {
       console.log(response.data);
       this.setState({

         taco:response.data,

         vegtables:Boolean,

          meat:Boolean,

         topping: Boolean,

         image: "",

 })

update = (event)=>{
    console.log(event.target.id)
    event.preventDefault();
    axios
        .put('/taco/'+event.target.id, this.state)
        .then((response)=>{
            console.log(response.data)
            this.setState({
              taco:response.data,

              vegtables:Boolean,

               meat:Boolean,

              topping: Boolean,

              image: "",


            })
        },
        (error)=>{
            console.log(error)
        }
    )
}


    render = () => {
      return (
         <div>

          <h2>Whats on tuesdays menu</h2>
          <form id ="makeTaco" onSubmit={this.create} >
          <label htmlFor ="name">Taco:</label><br/>
          <input type="text" name="name"id="name"/><br/>

          <label htmlFor ="vegtables">vegtables:</label><br/>
          <input type="text"  name="vegtables"id="vegtables"/><br/>

          <label htmlFor ="meat">Meat:</label><br/>
          <input type="text" name="meat"id="meat"/><br/>

          <label htmlFor ="image">Image:</label><br/>
          <input type="text" name="image"id="image"/><br/>
          </form>
        </div>
      )
    }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
