class App extends React.Component{
  state={
    name:"",
    image:"",
    tacos:[]
  }
  handleChange =(event) => {
    this.setState({
      [event.target.id]:event.target.value,
    })
    }
    handleSubmit=(event) => {
      event.preventDefault()
      axios
      .post("/taco",this.state)
      .then((response) => {
        this.setState({ tacos: response.data, name:"",image:""})
      })
}
deleteTaco =(event) => {
  axios.delete('/taco/'+ event.target.value)
  .then((response) => {
    this.setState({tacos: response.data})

  })

}
componentDidMount =() => {
  axios.get('/taco').then((response) => {
    this.setState({
      tacos:response.data,
    })
  })

}
  render = () => {
     return (
       <div>
       <h2>Create Taco</h2>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor= "name">Name</label>
          <input type="text" id="name"
          onChange={this.handleChange}/>
          <br/>
          <label htmlFor="image">Image</label>
           <input type="text" id="image"
           onChange={this.handleChange}/>
           <br/>
           <input type ="submit" value="Create Taco"/>
       </form>
       <h2>Tuesdays menu</h2>
       <ul>
         {this.state.tacos.map((taco) => {
           return(
             <li key={taco._id}>
              {taco.name}
              <img src= {taco.image} alt={taco.name}/>
               <button value={taco._id} onClick={this.deleteTaco}>
               DELETE
               </button>
             </li>

           )
         })}
       </ul>
       </div>

     )
  }
}

ReactDOM.render(<App></App>,document.querySelector('main'))
