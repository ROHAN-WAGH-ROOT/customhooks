import { useEffect, useState } from "react";

export const useUserStatus = (id) => {
  const [isValidUser, setIsValidUser] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let user = res.find((user) => user.id === id);
        if (user) {
          setUserName(user.username);
          setIsValidUser(true);
        } else {
          setUserName("");
          setIsValidUser(false);
        }
      })
      .catch((err) => {});
  }, [id]);

  return [isValidUser, userName];
};
