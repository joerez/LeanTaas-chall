import React, { Component } from 'react';


class NasaData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            rover: "Curiosity",
            sol: "1000",
            camera: "FHAZ"
        };
    }

    componentDidMount() {
        this.getRoverImage();
    }

    selectRover = e => {
        this.setState({ rover: e.target.value }, this.getRoverImage);
    };

    selectCamera = e => {
        this.setState({ camera: e.target.value }, this.getRoverImage);
    };

    selectSol = e => {
        this.setState({ sol: e.target.value }, this.getRoverImage);
    };

    getRoverImage = e => {
        let cam = this.state.camera;
        let rov = this.state.rover;
        let num = this.state.sol;
        const API_KEY = "qmR4B30Zh8JRDtJrC8FTkuC8Xjib0fX5UKOwgumg";

        let imageURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/${rov}/photos?sol={num}&camera=${cam}&api_key=${API_KEY}';

        fetch(imageURL)
            .then(res => res.json())
            .then(data => {
                this.setState({ photos: data.photos });
            })
            .catch(error => {
                console.log("Error fetching data :", error);
            });
    };

    render() {
        let labelStyle = {
            color: "#a9a9a9",
            fontSize: 15
        };

        let selectStyle = {
            color: "#ffff00",
            fontSize: 15,
            border: "1px solid black",
            borderRadius: 5
        };

        return (
            <div style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center", position: "fixed", width: "100%" }}>
                <h1 style={{ color: "red", fontFamily: "Arial" }}>
                    Mars Rover Photos
                </h1>
                <form onSubmit={this.getMarsAPI}>
                    <label htmlFor="rover" style={labelStyle}>
                    Rover</label>
                    <select onChange={this.selectRover} id="rover" style={selectStyle}>
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirit</option>
                    </select>
                    <label htmlFor="camera" style={labelStyle}>Camera Type</label>
                    <select onChange={this.selectCamera} id="rover" style={selectStyle}>
                        <option value="fhaz">FHAZ</option>
                        <option value="navcam">NAVCAM</option>
                        <option value="rhaz">RHAZ</option>
                    </select>
                    <label htmlFor="sol" style={labelStyle}>Martian Sol: 1000 - 2000</label>
                    <input 
                        max="2000"
                        min="1000"
                        onChange={this.selectSol}
                        style={selectStyle}
                        type="number"
                        value={this.state.sol}
                    />
                </form>
                
                </div>
            </div>
        )
    }
}

export default NasaData;