class App extends React.Component{
  state={
                name:"",
                image:"",
                onion: false,
                pepper:false,
                tomato:false,
                pork:false,
                carnita:false,
                shrimp:false,
                sourcream:false,
                guacamole:false,
                salsa:false,
                queso:false,
                tacos:[]
  }



  handleChange =(event) => {
     console.log(event.target.id, event.target.value);
    if(event.target.id === "onion"){
      console.log("issa work?");
      this.setState({onion:true})
    }else if(event.target.id === "pepper"){
      this.setState({pepper:true})

    }else if(event.target.id === "tomato"){
      this.setState({tomato:true})

    }else if(event.target.id ==="pork"){
      this.setState({pork:true})

    }else if(event.target.id === "carnita"){
      this.setState({carnita:true})

    }else if(event.target.id === "shrimp"){
      this.setState({shrimp:true})

    }else if(event.target.id ==="sourcream"){
      this.setState({sourcream:true})

    }else if(event.target.id === "guacamole"){
      this.setState({guacamole:true})

    }else if(event.target.id === "salsa"){
      this.setState({salsa:true})

    }else if(event.target.id ==="queso"){
      this.setState({queso:true})

    }else(this.setState({[event.target.id]:event.target.value,}))

    }
    handleSubmit=(event) => {
      event.preventDefault()
      axios
      .post("/taco",this.state)
      .then((response) => {
        this.setState({ tacos: response.data, name:"",image:"",
        onion:false,pepper:false,tomato:false})
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
      onion: false,
      pepper:false,
      tomato:false,
      pork:false,
      carnita:false,
      shrimp:false,
      sourcream:false,
      guacamole:false,
      salsa:false,
      queso:false,

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
           <details>
             <summary>Vegtables</summary>
             <label htmlFor="onion">onion</label>
              <input type="checkbox" id="onion"
              onChange={this.handleChange}
              value={this.state.onion}/>
              <br/>
               <label htmlFor="pepper">pepper</label>
              <input type="checkbox" id="pepper"
              onChange={this.handleChange}
              value={this.state.pepper}/>
              <br/>
               <label htmlFor="tomato">tomato</label>
              <input type="checkbox" id="tomato"
              onChange={this.handleChange}
              value={this.state.tomato}/>
              <br/>
              </details>
              <details>
                <summary>Meats</summary>
                <label htmlFor="pork">pork</label>
                 <input type="checkbox" id="pork"
                 onChange={this.handleChange}
                 value={this.state.pork}/>
                 <br/>
                  <label htmlFor="carnita">carnita</label>
                 <input type="checkbox" id="carnita"
                 onChange={this.handleChange}
                 value={this.state.carnita}/>
                 <br/>
                  <label htmlFor="shrimp">shrimp</label>
                 <input type="checkbox" id="shrimp"
                 onChange={this.handleChange}
                 value={this.state.shrimp}/>
                 <br/>
                 </details>
                 <details>
                   <summary>Toppings</summary>
                   <label htmlFor="sourcream">sourcream</label>
                    <input type="checkbox" id="sourcream"
                    onChange={this.handleChange}
                    value={this.state.sourcream}/>
                    <br/>
                     <label htmlFor="guacamole">guacamole</label>
                    <input type="checkbox" id="guacamole"
                    onChange={this.handleChange}
                    value={this.state.guacamole}/>
                    <br/>
                     <label htmlFor="salsa">salsa</label>
                    <input type="checkbox" id="salsa"
                    onChange={this.handleChange}
                    value={this.state.salsa}/>
                    <br/>
                    <label htmlFor="queso">queso</label>
                   <input type="checkbox" id="queso"
                   onChange={this.handleChange}
                   value={this.state.queso}/>
                   <br/>
                    </details>
                    </details>


           <input type ="submit" value="Create Taco"/>
       </form>
       <h2>Tuesdays menu</h2>
       <ul>
         {this.state.tacos.map((taco) => {
           return(
             <div key={taco._id}>
              {taco.name}

              <img src= {taco.image} id='images' alt={taco.name}/>


               <details>
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

                <label htmlFor="onion">Onion</label>
                <input type="checkbox" id="onion"
                onChange={this.handleChange} />
                <label htmlFor="pepper">Pepper</label>
                <input type="checkbox" id="pepper"
                onChange={this.handleChange} />
                <label htmlFor="tomato">Tomato</label>
                <input type="checkbox" id="tomato"
                onChange={this.handleChange} />
                <br/>
                <label htmlFor="pork">Pork</label>
                <input type="checkbox" id="pork"
                onChange={this.handleChange} />
                <label htmlFor="carnita">Carnita</label>
                <input type="checkbox" id="carnita"
                onChange={this.handleChange} />
                <label htmlFor="shrimp">Shrimp</label>
                <input type="checkbox" id="shrimp"
                onChange={this.handleChange} />
                <br/>
              <label htmlFor="sourcream">Sourcream</label>
                <input type="checkbox" id="sourcream"
                onChange={this.handleChange} />
                <label htmlFor="guacamole">Guacamole</label>
                <input type="checkbox" id="guacamole"
                onChange={this.handleChange} />
                <label htmlFor="salsa">Salsa</label>
                <input type="checkbox" id="salsa"
                onChange={this.handleChange} />
                <br/>
                <label htmlFor="queso">Queso</label>
                <input type="checkbox" id="queso"
                onChange={this.handleChange} />
                 <br/>
              <input type="submit" value="Update Taco"/>

                </form>
                  </details>
                  <button value={taco._id} onClick={this.deleteTaco}>
                  DELETE
                  </button>
             </div>

           )
         })}
       </ul>
       </div>

     )
  }
}

ReactDOM.render(<App></App>,document.querySelector('main'))
