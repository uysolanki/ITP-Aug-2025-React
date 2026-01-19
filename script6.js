
const menus = ["File", "Edit", "Selection", "View", "Go"]
let navbar = "<ol>";

menus.map(  (item) => navbar += `<li>${item}</li>` )
navbar += "</ol>"

let navbarDiv = document.getElementById("one");

navbarDiv.innerHTML = navbar