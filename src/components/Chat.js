import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Chating() {
  const { userName } = useParams();
  // console.log(userName);
  const [userArr, SetuserArr] = useState([]);
  const [to, SetTo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/messages/${userName}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => SetuserArr(data))
      .catch((err) => console.log(err));
    // async function fetchData() {
    //   const newUserArr = await fetch(
    //     http://localhost:3000/api/messages/${userName}
    //   );
    //   //  console.log(newUserArr);
    //   const newUserArrJson = await newUserArr.json();
    //   console.log(newUserArrJson);
    //    SetuserArr(newUserArrJson);
    // }
    // fetchData();
  }, [userName]);

  console.table(userArr);
  return (
    <div className="container">
      <div className="masseges">
        {userArr.map((user, index) => {
          return (
            <div className="msg" key={index}>
              <p>
                <b>
                  <span> from :</span> {user.from} <span>to </span>: {user.to}
                </b>
              </p>
              <p>
                {user.content}
                <br></br> <b>Time sending : </b>
                {user.dateInMs} ms
              </p>
            </div>
          );
        })}
        <h2>Chat</h2>
        <input
          style={{ width: "40%" }}
          type="text"
          name="to"
          placeholder="enter name the person you want to chat"
          onChange={(event) => SetTo(event.target.value)}
        ></input>
        <br></br>
        <Link to={`/chat/${userName}/${to}`}>
          <button type="button">Start Chating</button>
        </Link>
      </div>
    </div>
  );
}
