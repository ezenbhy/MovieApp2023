// Macaron.js
//클래스형 컴포넌트 rce

/* import React, { Component } from 'react'

class Macaron extends Component {
  render() {
    return (
      <div>Macaron</div>
    )
  }
}

export default Macaron */

// 함수형 컴포넌트 rfce
import React from 'react'

/* function Macaron(props) {
  console.log(props);
  return (
    <div>
      <h1>No. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimage} alt={props.propsname} width={200} height={200} />
    </div>
  )
} */
/* function Macaron(props) {
  console.log(props);
  const {propsname, propsid, propsimage} = props; //구조분해할당
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200} />
    </div>
  )
} */
function Macaron({propsname, propsid, propsimage}) {//구조분해할당
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200} />
    </div>
  )
}

export default Macaron