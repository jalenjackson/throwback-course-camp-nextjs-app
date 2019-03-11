export const call = context => {
  const iframe = $('.sandbox-iframe');
  const combinedHTML = `<html lang="en"><head><title>Coding Project | BrainFlop</title><style>${context.state.cssSandboxValue}</style></head><body>${context.state.htmlSandboxValue}</body></html>`;
  const document = iframe[0].contentDocument;
  document.body.innerHTML = combinedHTML;
  let scriptTag = `<script>${context.state.javascriptSandboxValue}` + '<';
  scriptTag +=  "/script>";
  iframe.css({ display: 'block' }).contents().find("body").append(scriptTag);
  context.setState({ currentSandbox: 'Output', endGame: 'false' });
};
