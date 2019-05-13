class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Em que hora elas são alimentadas:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
                Que tipo de comida as pessoas dão a elas:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label> 
            <label>
                Onde elas são alimentadas:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label> 
            <label>
                Quanto de comida elas comem a cada interação:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label> 
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

export default Index;