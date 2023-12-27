import { createConnection } from "@/utilis/chat";
import React, { useEffect, useState } from "react";

const ChatRoom = ({ option }) => {
  const [serverUrl, setServelUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, option);
    connection.connect();
    return () => {
      connection.disconnected();
    };
  }, [serverUrl, option]);

  return (
    <div>
      <label>Servel URL </label>
      <input
        value={serverUrl}
        className="border-2 my-2" 
        onChange={(e) => {
          setServelUrl(e.target.value);
        }}
      />
      <h2>Welcome to {option} Room</h2>
    </div>
  );
};

export default ChatRoom;
