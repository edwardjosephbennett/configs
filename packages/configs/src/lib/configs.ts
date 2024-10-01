export function consoleOutput(param: string) : null {
  console.log(param);
  return null;
}

export function edsFancyOutput(param: string) : null {
  console.error(param);
  return null;
}

export function anotherFancyOutput(name: string) : null {
  console.warn(`Hello, ${name}`);
  return null;
}

export function addition(a: number, b: number) : number {
  console.log('From Addition:', a + b);
  return a + b;
}

export default consoleOutput;
