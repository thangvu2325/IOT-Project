import { FunctionComponent } from "react";

interface LoadingScreenProps {}

const LoadingScreen: FunctionComponent<LoadingScreenProps> = () => {
  return <div className="w-full h-screen bg-red-500">Loading....</div>;
};

export default LoadingScreen;
