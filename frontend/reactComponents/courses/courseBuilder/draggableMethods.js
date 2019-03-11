export const onDragEnd = (props, result, arr, isFromTimeline) => {
  if (!result.destination) return;
  const newSections = reorderSections(arr, result.source.index, result.destination.index);
  if (isFromTimeline) {
    props.container.changeCurrentActiveSection(result.destination.index);
    props.container.reorderSections(props.auth, newSections);
  }
};

export const reorderSections = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};
