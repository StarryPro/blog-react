// eslint-disable

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [post, setPost] = useState("");
  let [modal, setModal] = useState("false");
  let [order, setOrder] = useState(1);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>개발 Blog</h4>
      </div>
      {title.map(function (el, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setOrder(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  let newCount = [...count];
                  newCount[i] = newCount[i] + 1;
                  setCount(newCount);
                  e.stopPropagation();
                }}
              >
                👍 {count[i]}
              </span>
            </h4>
            <span>6월 25일 발행</span>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setPost(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle.unshift(post);
          setTitle(newTitle);
        }}
      >
        글발행
      </button>
      {modal === true ? <Modal title={title} order={order} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.order]}</h4>
      <span>날짜</span>
      <p>상세내용</p>
    </div>
  );
}

export default App;

//   let [글제목, 글제목변경] = useState([
//     "남자 코트 추천",
//     "강남 우동 맛집",
//     "파이썬 독학",
//   ]);

//   let [따봉, 따봉변경] = useState([0, 0, 0]);
//   let [modal, setModal] = useState(false);
//   let [title, setTitle] = useState(1);
//   let [입력값, 입력값변경] = useState("");
//   let [날짜] = useState(new Date().toLocaleString());

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <h4>블로그임</h4>
//       </div>

//       <button
//         onClick={() => {
//           let list = [...글제목];
//           list.sort();
//           글제목변경(list);
//         }}
//       >
//         가나다라순정렬
//       </button>

//       <button
//         onClick={() => {
//           let copy = [...글제목];
//           copy[0] = "여자코트 추천";
//           글제목변경(copy);
//         }}
//       >
//         글수정
//       </button>
//       {글제목.map(function (a, i) {
//         return (
//           <div className="list" key={i}>
//             <h4
//               onClick={() => {
//                 setModal(!modal);
//                 setTitle(i);
//               }}
//             >
//               {글제목[i]}
//               <span
//                 onClick={(e) => {
//                   let copy = [...따봉];
//                   copy[i] = copy[i] + 1;
//                   따봉변경(copy);
//                   e.stopPropagation();
//                 }}
//               >
//                 👍
//               </span>
//               {따봉[i]}
//             </h4>
//             <p>6월 21일 발행</p>
//             <button
//               onClick={() => {
//                 let copy = [...글제목];
//                 copy.splice(i, 1);
//                 글제목변경(copy);
//               }}
//             >
//               삭제
//             </button>
//             <span>{날짜}</span>
//           </div>
//         );
//       })}

//       <input
//         defaultValue="흠.."
//         placeholder="어맛.."
//         onChange={(e) => {
//           console.log(e.target.value);
//           입력값변경(e.target.value);
//           console.log(`input 입력값 : ${입력값}`);
//         }}
//       />
//       <button
//         onClick={() => {
//           if (isNaN(입력값)) {
//             alert("번호 입력 안돼여...");
//             입력값변경("");
//             console.log(`button 입력값 : ${입력값}`);
//             return;
//           }
//           let copy = [...글제목];
//           copy.unshift(입력값);
//           글제목변경(copy);
//         }}
//       >
//         글발행
//       </button>

//       {modal === true ? (
//         <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} />
//       ) : null}
//     </div>
//   );
// }

// function Modal(props) {
//   return (
//     <div className="modal">
//       <h4>{props.글제목[props.title]}</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//       <button>글수정</button>
//     </div>
//   );
