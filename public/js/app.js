class App extends React.Component{
  state={
    name:"",
    image:"",
    vegtables: { onion: false,
                 pepper:false,
                 tomato:false

       },
    meats:{  pork:false,
            carnita:false,
            shrimp:false
    },
    toppings:{ sourcream:false,
              guacamole:false,
              salsa:false,
              queso:false
    },
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
        this.setState({ tacos: response.data, name:"",image:"",
        vegtables:{onion:false,pepper:false,tomato:false}})
      })
}

updateTaco = (event) => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/taco/' + id, this.state).then((response) => {
    this.setState({
      tacos: response.data,
      name: '',
      image: '',
    })
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
          onChange={this.handleChange}
          value={this.state.name}/>
          <br/>
          <label htmlFor="image">Image</label>
           <input type="text" id="image"
           onChange={this.handleChange}
           value={this.state.image}/>
           <br/>
           <details>
             <summary>Vegtables</summary>
             <label htmlFor="onion">onion</label>
              <input type="checkbox" id="onion"
              onChange={this.handleChange}
              value={this.state.vegtables.onion}/>
              <br/>
               <label htmlFor="pepper">pepper</label>
              <input type="checkbox" id="pepper"
              onChange={this.handleChange}
              value={this.state.vegtables.pepper}/>
              <br/>
               <label htmlFor="tomato">tomato</label>
              <input type="checkbox" id="tomato"
              onChange={this.handleChange}
              value={this.state.vegtables.tomato}/>
              <br/>
              </details>
              <details>
                <summary>Meats</summary>
                <label htmlFor="pork">pork</label>
                 <input type="checkbox" id="pork"
                 onChange={this.handleChange}
                 value={this.state.meats.pork}/>
                 <br/>
                  <label htmlFor="carnita">carnita</label>
                 <input type="checkbox" id="carnita"
                 onChange={this.handleChange}
                 value={this.state.meats.carnita}/>
                 <br/>
                  <label htmlFor="shrimp">shrimp</label>
                 <input type="checkbox" id="shrimp"
                 onChange={this.handleChange}
                 value={this.state.meats.shrimp}/>
                 <br/>
                 </details>
                 <details>
                   <summary>Toppings</summary>
                   <label htmlFor="sourcream">sourcream</label>
                    <input type="checkbox" id="sourcream"
                    onChange={this.handleChange}
                    value={this.state.toppings.sourcream}/>
                    <br/>
                     <label htmlFor="guacamole">guacamole</label>
                    <input type="checkbox" id="guacamole"
                    onChange={this.handleChange}
                    value={this.state.toppings.guacamole}/>
                    <br/>
                     <label htmlFor="salsa">salsa</label>
                    <input type="checkbox" id="salsa"
                    onChange={this.handleChange}
                    value={this.state.toppings.salsa}/>
                    <br/>
                    <label htmlFor="queso">queso</label>
                   <input type="checkbox" id="queso"
                   onChange={this.handleChange}
                   value={this.state.toppings.queso}/>
                   <br/>
                    </details>

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
               <details>
                <summary>Add some flavor</summary>
                <form id={taco._id}
                onSubmit={this.updateTaco}>
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="image">Image</label>
                <br/>
                <input type="text" id="image"
                onChange={this.handleChange} />

                <br/>
                <input type="submit" value="Update Taco"/>
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

ReactDOM.render(<App></App>,document.querySelector('main'))
