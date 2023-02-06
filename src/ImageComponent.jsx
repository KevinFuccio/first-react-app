import { Component } from "react";
class ImageComponent extends Component{
    render(){
        return <img src={this.props.img} alt={this.props.alt} width={this.props.width}/>
    }
};

export default ImageComponent;