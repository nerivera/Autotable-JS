function genTable(rows, cols, class, enum=true, writeId="", ind=0) {
  let res = "<table class=\"" + class + "\">\n  <tbody class=" + class + "\">\n";
  for(let r = 0; r < rows; r ++) {
    res += "    <tr class=\"" + class + "\">\n";
    for(let c = 0; c < cols; c ++) {
      res += "      <td class=\"" + class + (enum ? " " + (r * cols + c).toString() : "") + "\"></td>\n";
    }
    res += "    </tr>\n";
  }
  res += "  </tbody>\n</table>";
  lines = res.split("\n");
  for(let i = 0; i < lines.length; i ++) {
    lines[i] = " ".repeat(ind) + lines[i];
  }
  if(typeof writeId == "string" && writeId != "") window.document.getElementById(writeId).innerHTML += "\n" + lines.join("\n");
  return res;
}
