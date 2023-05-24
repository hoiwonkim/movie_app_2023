import React from "react"; // React 모듈을 불러온다.
// import Potato from "./Potato"; // Potato 컴포넌트를 불러온다.
import PropTypes from "prop-types";

// function Food({ favourite }) { // favorite 값을 받아와서 출력하는 함수
//   console.log(favourite);
//   return <h1>I like {favourite}</h1>;
// }
// function Food({ name, picture }) {
//   return (
//     <div>
//       <h2>I like {name}</h2> {/* name 변수를 출력하는 h2 태그 */}
//       <img src={picture} alt={name} /> {/* picture 변수를 이미지로 출력하는 img 태그 */}
//     </div>
//   );
// }

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9  
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://th.bing.com/th?id=OIP.xMA6DlkvBrNCYJp3MosEsAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    rating: 4.5  
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 3.8  
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7  
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2> {/* name 변수를 출력하는 h2 태그 */}
      <h4>{rating}/5.0</h4> {/* rating 변수를 이용하여 별점을 출력하는 HTML 코드 */}
      <img src={picture} alt={name} />{" "} {/* picture 변수를 이미지로 출력하는 img 태그 */}
    </div>
  );
}

// Food 컴포넌트의 props 타입을 정의합니다.
Food.propTypes = {
  // name props는 string 타입이며, 필수적으로 전달되어야 합니다.
  name: PropTypes.string.isRequired,
  // picture props는 string 타입이며, 필수적으로 전달되어야 합니다.
  picture: PropTypes.string.isRequired,
  // rating props는 number 타입이며, 전달하지 않아도 됩니다.
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {/* <h1>Hello!!!!</h1>  "Hello!!!!"라는 텍스트를 출력하는 h1 태그 */}
      {/* <Potato />  Potato 컴포넌트를 출력하는 태그 */}
      {/* <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" /> */}
      {foodILike.map(
        (
          dish // =>의미는 return이다. foodILike 배열의 각 요소에 대해 반복문 실행
        ) => (
          // <Food name={dish.name} picture={dish.image} /> // Food 컴포넌트에 dish의 name과 image props 전달
          // <Food key={dish.id} name={dish.name} picture={dish.image} /> // dish 객체의 id, name, image를 props로 전달하여 Food 컴포넌트를 렌더링한다.
          <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
        )
      )}
    </div>
  );
}

export default App;
