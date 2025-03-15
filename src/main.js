"use strict";

function capitalize(str = "") {
  if (typeof str !== "string") return "";
  const normalizedStr = str.trim();
  return normalizedStr.charAt(0).toUpperCase() + normalizedStr.slice(1);
}

export { capitalize };
