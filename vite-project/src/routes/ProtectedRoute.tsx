import { FunctionComponent, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  children,
}) => {
  return children;
};

export default ProtectedRoute;
