const logError = (str) =>
  console.log("%c%s", "color: red; font-size: 1rem;", str)

export const apiResErrorLog = (res) => {
  const { config = {}, status, statusText, data = {} } = res

  logError(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
API REQ ERROR LOG:
Request URL: ${config?.baseURL}${config?.url}
Request Method: ${config?.method?.toUpperCase()}
Status Code: ${status}${statusText ? " (" + statusText + ")" : ""}
${config.data ? "Request body: " + config.data : ""}
`)
  if (data?.errors) {
    data?.errors.forEach((error, i) => {
      logError(
        `${data?.errors.length > 1 ? i + ") " : ""}${error.code}: ${error.message}`
      )
    })
  } else {
    logError("Undefined error")
  }
  logError("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

export const apiErrorLog = (error) => {
  const { config = {}, response = {} } = error
  logError(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
API REQ ERROR LOG:
Request URL: ${config?.baseURL}${config?.url}
Request Method: ${config?.method?.toUpperCase()}
Status Code: ${response?.status}${
    response?.statusText ? " (" + response?.statusText + ")" : ""
  }
${config.data ? "Request body: " + config.data : ""}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`)
}