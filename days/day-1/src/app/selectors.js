import ContentType from "./ContentType";

// TODO: Don't use Array#find()
export const currentContentSelector = ({ contents }, { location }) =>
  contents.find((content) => content.absolutePath === location.pathname);

export const contentsGroupsSelector = ({ contents }) => {
  const groupsByType = contents.reduce((acc, content) => {
    const item = acc[content.type] = acc[content.type] || [];
    item.push(content);
    return acc;
  }, {});

  return [
    {
      type: ContentType.Doc,
      path: "docs",
      contents: groupsByType[ContentType.Doc]
    },
    {
      type: ContentType.Exercise,
      path: "exercises",
      contents: groupsByType[ContentType.Exercise]
    }
  ].filter(Boolean);
};
