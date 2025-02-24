// This serves as a server component wrapper
import SplashScreenClient from "./SplashScreenClient";

export default function SplashScreenWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SplashScreenClient>{children}</SplashScreenClient>;
}
