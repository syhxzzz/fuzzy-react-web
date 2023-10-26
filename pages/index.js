import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}
export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Link href="/index1">
        <Header title="Develop. Preview. Ship. 🚀" />
      </Link>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>current Path name: {usePathname()}</p>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
