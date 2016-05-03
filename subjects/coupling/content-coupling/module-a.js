import * as ModuleB from "./module-b";

export function showVisitorCount() {
  console.log(`Visitor: ${ModuleB.visitorCount}`);
}
