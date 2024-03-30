import { useEffect } from "react";
function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
