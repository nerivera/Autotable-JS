function genTable(rows, cols, class, enum=true, write=false) {
  let res = "<table>\n  <tbody>\n";
  for(let r = 0; r < rows; r ++) {
    res += "    <tr>\n";
    for(let c = 0; c <= cols; c ++) {
      res += "      <td class=" + class + (enum ? " " + (r * cols + c).toString() : "") + "\"></td>\n";
    }
    res += "    </tr>\n";
  }
  res += "  </tbody>\n</table>";
  if(write) document.write(res);
  return res;
}
