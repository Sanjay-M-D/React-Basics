const { useEffect, useState } = require("react");

const useOnlineStatus = () => {
  // Check the client is online or offline

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // returns boolean value
  return onlineStatus;
};

export default useOnlineStatus;
