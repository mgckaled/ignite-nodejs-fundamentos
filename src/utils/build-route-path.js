export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const paramsWithParams = path.replaceAll(
    routeParametersRegex,
    '(?<$1>[a-z0-9-_]+)'
  )

  console.log(Array.from(path.matchAll(routeParametersRegex)))
  const pathRegex = new RegExp(`^${paramsWithParams}`)

  return pathRegex
}
