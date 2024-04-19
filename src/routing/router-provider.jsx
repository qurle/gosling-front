import { BrowserRouter } from "react-router-dom"
import PrivateRouter from "src/routing/private-router"
import UnauthorizedRouter from "src/routing/unauthorized-router"

export function RouterProvider() {
  return (
    <BrowserRouter>
      <PrivateRouter />
      <UnauthorizedRouter />
    </BrowserRouter>
  )
}
