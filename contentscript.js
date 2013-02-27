if (window.location.href.match(/tumblr.com\/post\//gi)) {
  
  var body = document.getElementsByTagName("body")[0];
	var link = document.createElement("a");

	link.style.position = "fixed";
	link.style.top = "0";
	link.style.left = "0";
	link.style.display = "block";
	link.style.backgroundColor = "#86302D";
	link.style.width = "100%";
	link.style.fontSize = "16px";
	link.style.lineHeight = "24px";
	link.style.textAlign = "center";
	link.style.textDecoration = "none";
	link.style.color = "#DDBB98";
	link.style.fontFamily = "monospace";
	link.appendChild(document.createTextNode("Click to escape to the serene, unthemable tumblr archive."));
	link.setAttribute("href", "http://" + window.location.hostname + "/archive/");

  body.appendChild(link);
}
