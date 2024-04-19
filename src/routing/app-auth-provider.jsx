import { useAuth } from "src/hooks/use-auth"

export function AppAuth({ children }) {
  const { isAppReady } = useAuth()

  return <>{isAppReady ? <>{children}</> : "Loading..."}</>
}
