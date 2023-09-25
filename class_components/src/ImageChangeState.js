import React from 'react'
class ImageChangeState extends React.Component{
    state={
        image:'https://wallpapers.com/images/featured/anime-boy-dark-oltg2lztxcu00bec.jpg'
    }
    changeGender=()=>{
        let boyURL='https://wallpapers.com/images/featured/anime-boy-dark-oltg2lztxcu00bec.jpg';
        let girlURL='https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-101.jpg';
        let image=this.state.image===boyURL?girlURL:boyURL;
        this.setState({image})
    }
    render() {
        const style={
            width:'200px',
            height:'200px'
        }
      return (
        <div>
          <img src={this.state.image} alt='' style={style}></img>
          <button onClick={this.changeGender}>changeGender</button>
        </div>
      )
    }
}
export default ImageChangeState;