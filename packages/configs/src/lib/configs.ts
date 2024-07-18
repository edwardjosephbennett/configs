export function configs() : string {
  console.log("configs")
  return 'configs';
}

/**
 * @deprecated
 */
export function debug() : string {
  return "debug";
}

/**
 * @deprecated
 */
export function debugNew() : string {
  return "debugNew";
}

export function brandNewDeploymentFunction(paramOne: string) : string {
  return paramOne;
}

export default configs;
