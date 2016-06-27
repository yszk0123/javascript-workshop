import global from "global";

export function showVisitorCount() {
  console.log(`Visitor: ${global.globalVisitorCount}`);
}
