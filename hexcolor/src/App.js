const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  const HexaColor = () => {
    const bgColor = hexaColor()
    const styles = {
      height: '100px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      fontFamily: 'Montserrat',
      margin: '2px auto',
      borderRadius: '5px',
      width: '75%',
      border: '2px solid black',
      backgroundColor:bgColor
    }
    return (
      <div style={styles}>
        <h2>{bgColor}</h2>
      </div>
    );
  }
export default HexaColor;
