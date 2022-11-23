import React from "react";
import { useState } from "react";

function MessageInput({ send }: { send: (value: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="type your messages"
        value={value}
      />
      <button onClick={() => (send(value), setValue(""))}>Send</button>
    </>
  );
}

export default MessageInput;
