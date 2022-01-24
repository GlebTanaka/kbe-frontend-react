import { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}
  

class Map extends Component {
    constructor(props){
        super(props);
        if(this.props.lat){
            this.setState({position: [this.props.lat, this.props.lng]});
        }
    }
    

    state = {
        position: [50, 50]
    };

    async componentDidMount() {
        if(this.props.lat){
            this.setState({position: [this.props.lat, this.props.lng]});
        }
        this.changeView();
    }

    async componentDidUpdate(){
        if(this.props.lat){
            this.setState({position: [this.props.lat, this.props.lng]});
        }
        this.changeView();
    }

    render() {
      return (
          <div id="mapid">
        <MapContainer style={{height:"100%", width:"100%"}} center={this.state.position} zoom={11}>
            <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={this.state.position}></Marker>
            <ChangeMapView coords={this.state.position}/>
        </MapContainer>
        </div>
      );
    }
  }
  export default Map;