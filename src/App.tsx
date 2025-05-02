import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>ようこそ、Reactの世界へ</h1>
      <input
        type="text"
        placeholder="名前を入力して"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name ? `${name}、今日も頑張ろうな` : "名前教えて"}</p>
    </div>
  );
}
