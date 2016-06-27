const user = {
  name: "foo",
  age: 20
};

export funciton visitPage(user) {
  page.visitorCount = page.visitorCount + 1;
}

export function showVisitorCount(user) {
  console.log(`${page.title}: ${page.visitorCount}`);
}
