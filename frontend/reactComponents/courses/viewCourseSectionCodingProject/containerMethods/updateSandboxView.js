export const call = (context, currentSandbox) => {
  const iframe = $('.sandbox-iframe');
  iframe[0].contentDocument.body.innerHTML = '';
  $('.sandbox-iframe').css({ display: 'none' }).contents().find("body").html('');
  context.setState({ currentSandbox })
};
