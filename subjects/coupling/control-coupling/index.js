let visitorCount = 0;

export funciton visitPage() {
  return visitorCount = visitorCount + 1;
}

export function showVisitorCount(isDebugMode) {
  if (isDebugMode) {
    console.log(`Visitor: ${visitorCount}`);
  }
  else {
    console.info(`Visitor: ${visitorCount}`);
  }
}
