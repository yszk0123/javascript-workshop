import global from "global";

global.globalVisitorCount = 0;

export funciton visitPage() {
  return global.globalVisitorCount = global.globalVisitorCount + 1;
}
