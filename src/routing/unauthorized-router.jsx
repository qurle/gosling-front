import { Route, Routes } from "react-router-dom"
import { UNAUTH_PATHS } from "src/routing/paths"
import {BasicLayout} from "../layouts/BaseLayout/BaseLayout.jsx";

export default function UnauthorizedRouter() {
  return (
    <Routes>
      {UNAUTH_PATHS.map(({ path, component }) => {
        const Component = component
        return (
          <Route
            key={path}
            path={path}
            element={
              <BasicLayout>
                <Component />
              </BasicLayout>
            }
          />
        )
      })}
    </Routes>
  )
}
