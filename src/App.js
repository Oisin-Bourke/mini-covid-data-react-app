import React, { Component } from 'react';
import Country from './Country/Country'
import Grid from '@material-ui/core/Grid'
import './index.css'

class App extends Component {

  state = {
    error : null,
    dataUK : {},
    dataIreland : {},
    dataUS : {},
    isLoaded : false
  }

  componentDidMount() {
    this.fetchIrelandData()
    this.fetchUKData()
    this.fetchUSData()
  }

  render() {
    const irelandPopulation = 4904000
    const northenIrelandPopulation = 1897893
    const englandPopulation = 55670000
    const ukPopulation = 66650000
    const usPopulation = 328200000
    
    const { error, isLoaded, dataUK, dataIreland, dataUS } = this.state;

    const irelandPercent = dataIreland.Deaths * (100 / irelandPopulation)
    const northernIrelandPercent = dataUK.northenIrelandDeceased * (100 / northenIrelandPopulation)
    const englandPercent = dataUK.englandDeceased * (100 / englandPopulation)
    const ukPercent = dataUK.deceased * (100 / ukPopulation)
    const usPercent = dataUS.deaths * (100 / usPopulation)
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Covid-19 Data</h1>
           <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
        <Country 
            name={'Ireland'} 
            population = {irelandPopulation} 
            deaths={dataIreland.Deaths} 
            percentage={irelandPercent.toFixed(4)}
          />  
        </Grid>
        <Grid item xs={4}>
        <Country 
            name={'England'} 
            population = {englandPopulation} 
            deaths={dataUK.englandDeceased} 
            percentage={englandPercent.toFixed(4)}
          />  
        </Grid>
        <Grid item xs={4}>
        <Country 
            name={'United States'} 
            population = {usPopulation} 
            deaths={dataUS.deaths} 
            percentage={usPercent.toFixed(4)}
          /> 
        </Grid>
        <Grid item xs={4}>
        <Country 
            name={' Northern Ireland'} 
            population = {northenIrelandPopulation} 
            deaths={dataUK.northenIrelandDeceased} 
            percentage={northernIrelandPercent.toFixed(4)}
          />  
        </Grid>
        <Grid item xs={4}>
        <Country 
            name={'United Kingdom'} 
            population = {ukPopulation} 
            deaths={dataUK.deceased} 
            percentage={ukPercent.toFixed(4)}
          />
        </Grid>
        <Grid item xs={4}>
        <Country 
            name={'United States'} 
            population = {usPopulation} 
            deaths={dataUS.deaths} 
            percentage={usPercent.toFixed(4)}
          /> 
        </Grid>
        
      </Grid>
    </div>  
        </div>
      );
    }  
  
  }

  fetchIrelandData = () => {
    fetch("https://api.covid19api.com/live/country/ireland/status/confirmed")
      .then(res => res.json())
      .then(
        (result) => {
          const dataToday = result[result.length -1]   
          this.setState({
            isLoaded: true,
            dataIreland: dataToday
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
  }

  fetchUKData = () => {
    fetch("https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dataUK: result 
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
  }

  fetchUSData = () => {
    fetch("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=US")
      .then(res => res.json())
      .then(
        (result) => {
          const data = result[0]
          this.setState({
            isLoaded: true,
            dataUS: data 
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
  }

}

export default App;
