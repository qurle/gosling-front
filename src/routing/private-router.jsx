import { Navigate, Route, Routes } from "react-router-dom"
import { BasicLayout } from "src/layouts/BaseLayout/BaseLayout.jsx"
import {
  BASIC_PRIVATE_PATH,
  PRIVATE_PATHS,
  UNAUTH_MAIN_PAGE,
} from "src/routing/paths"
import { useAuthStore } from "src/store/auth"

export default function PrivateRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <BasicLayout>
              <Navigate to={BASIC_PRIVATE_PATH} replace />
            </BasicLayout>
          </RequireAuth>
        }
      />
      {PRIVATE_PATHS.map(({ path, component }) => {
        const Component = component
        return (
          <Route
            key={path}
            path={path}
            element={
              <RequireAuth>
                <BasicLayout>
                  <Component />
                </BasicLayout>
              </RequireAuth>
            }
          />
        )
      })}
    </Routes>
  )
}

function RequireAuth({ children }) {
  const isAuth = useAuthStore((state) => state.isAuth)

  return isAuth ? children : <Navigate to={UNAUTH_MAIN_PAGE} replace />
}
