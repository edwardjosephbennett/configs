export function consoleOutput(param: string) : null {
  console.log(param);
  return null;
}

export function edsFancyOutput(param: string) : null {
  console.error(param);
  return null;
}

export default consoleOutput;
