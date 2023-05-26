import React from "react"; // React 모듈을 불러온다.
// import Potato from "./Potato"; // Potato 컴포넌트를 불러온다.
// import PropTypes from "prop-types";

// 음식 이름 사진 아이디
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

// 음식 이름 사진 아이디
// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 4.9
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.8
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "https://th.bing.com/th?id=OIP.xMA6DlkvBrNCYJp3MosEsAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
//     rating: 4.5
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 3.8
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.7
//   }
// ];

  // function Food({ name, picture, rating }) {
  //   return (
  //     <div>
  //       <h2>I like {name}</h2> {/* name 변수를 출력하는 h2 태그 */}
  //       <h4>{rating}/5.0</h4> {/* rating 변수를 이용하여 별점을 출력하는 HTML 코드 */}
  //       <img src={picture} alt={name} />{" "} {/* picture 변수를 이미지로 출력하는 img 태그 */}
  //     </div>
  //   );
  // }

  // // Food 컴포넌트의 props 타입을 정의합니다.
  // Food.propTypes = {
  //   // name props는 string 타입이며, 필수적으로 전달되어야 합니다.
  //   name: PropTypes.string.isRequired,
  //   // picture props는 string 타입이며, 필수적으로 전달되어야 합니다.
  //   picture: PropTypes.string.isRequired,
  //   // rating props는 number 타입이며, 전달하지 않아도 됩니다.
  //   rating: PropTypes.number
  // };

  // function App() {
  //   return (
  //     <div>
  //       {/* <h1>Hello!!!!</h1>  "Hello!!!!"라는 텍스트를 출력하는 h1 태그 */}
  //       {/* <Potato />  Potato 컴포넌트를 출력하는 태그 */}
  //       {/* <Food favourite="kimchi" />
  //       <Food favourite="ramen" />
  //       <Food favourite="samgiopsal" />
  //       <Food favourite="chukumi" /> */}
  //       {foodILike.map(
  //         (
  //           dish // =>의미는 return이다. foodILike 배열의 각 요소에 대해 반복문 실행
  //         ) => (
  //           // <Food name={dish.name} picture={dish.image} /> // Food 컴포넌트에 dish의 name과 image props 전달
  //           // <Food key={dish.id} name={dish.name} picture={dish.image} /> // dish 객체의 id, name, image를 props로 전달하여 Food 컴포넌트를 렌더링한다.
  //           <Food
  //           key={dish.id}
  //           name={dish.name}
  //           picture={dish.image}
  //           rating={dish.rating}
  //         />
  //         )
  //       )}
  //     </div>
  //   );

  // 숫자 counter
// class App extends React.Component {
//   state = {
//     count: 0, // count 변수를 0으로 초기화
//   };
//   add = () => { // add 함수 정의
//     console.log("add"); // add 함수가 실행될 때 "add" 출력
//     this.setState((current) => ({ count: current.count + 1 })); // count 상태를 1 증가시키는 함수
//   };
//   minus = () => { // minus 함수 정의
//     console.log("minus"); // minus 함수가 실행될 때 "minus" 출력
//     this.setState((current) => ({ count: current.count - 1 })); // count 상태를 1 감소시키는 함수
//   };
//   componentDidMount() {
//     console.log("Component rendered"); // 컴포넌트가 렌더링된 후 "Component rendered" 출력
//   }
//   componentDidUpdate() {
//     console.log("I just updated"); // 컴포넌트가 업데이트된 후 "I just updated" 출력
//   }
//   componentWillUnmount() {
//     console.log("Goodbye, cruel world"); // 컴포넌트가 제거되기 전 "Goodbye, cruel world" 출력
//   }

//   render() {
//     console.log("I'm rendering"); // 렌더링될 때 "I'm rendering" 출력
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1> {/* // 현재 count 값 출력 */}
//         <button onClick={this.add}>Add</button> {/*// add 함수 실행하는 버튼 */}
//         <button onClick={this.minus}>Minus</button>{" "} {/*// minus 함수 실행하는 버튼 */}
//       </div>
//     );
//   }


// move to the ../routes/Home.js file
// import axios from "axios";
// import Movie from "../components/Movie";
// import "./App.css";

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   getMovies = async () => {
//     // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//   };
//     componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoading: false });
//     }, 6000);
//     this.getMovies();
//   }
//   render() {
//     // const { isLoading } = this.state;
//     // return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
//     const { isLoading, movies } = this.state;
//     return (
//       // <div>
//       //   {isLoading
//       //     ? "Loading..."
//       //     : movies.map(movie => (
//         // <section class="container">
//         <section className="container">
//         {isLoading ? (
//           // <div class="loader">
//           //   <span class="loader__text">Loading...</span>
//           <div className="loader">
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           // <div class="movies">
//           <div className="movies">
//             {movies.map(movie => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 genres={movie.genres}
//               />
//               ))}
//       {/* </div> */}
//       </div>
//         )}
//       </section>
//     );
//   }

import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  // return <span>something</span>;
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/movie-detail" component={Detail} /> */}
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
