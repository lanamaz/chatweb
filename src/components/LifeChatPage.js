import { useParams } from "react-router-dom";
export default function LifeChat() {
  const { from, to } = useParams();
  console.log({ from, to });
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Content = formData.get("content");
    let DateInMs = new Date().getTime();
    // console.log(DateInMs);
    // console.log(Content);

    fetch(`http://localhost:3000/api/messages/send/${from}/${to}`, {
      method: "POST",
      //to tell the server that we are sending a message in json format
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: Content,
        dateInMs: DateInMs,
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ flexDirection: "column" }}>
      <h1>Welcome back</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="content"
          placeholder="Enter your message"
          required
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
