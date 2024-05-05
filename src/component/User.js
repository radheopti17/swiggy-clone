import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Twitter Handle: @1r7</h4>
    </div>
  );
};

export default User;
