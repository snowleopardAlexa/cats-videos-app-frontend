// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "EDIT_CONTENT":
      const updateContent = action.payload;

      const updateContents = state.contents.map((content) => {
        if (content.id === updateContent.id) {
          return updateContent;
        }
        return content;
      });
      return {
        ...state,
        contents: updateContents,
      };
    default:
      return state;
  }
};
