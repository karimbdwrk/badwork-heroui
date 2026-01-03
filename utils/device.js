export function isLikelySmartphone() {
	const ua = navigator.userAgent.toLowerCase();

	const isAndroidPhone = ua.includes("android") && ua.includes("mobile");

	const isIphone = ua.includes("iphone") || ua.includes("ipod");

	const isWindowsPhone = ua.includes("windows phone");

	return isAndroidPhone || isIphone || isWindowsPhone;
}

export function isTablet() {
	const ua = navigator.userAgent.toLowerCase();

	return (
		ua.includes("ipad") ||
		(ua.includes("android") && !ua.includes("mobile"))
	);
}

export function isLandscape() {
	return window.innerWidth > window.innerHeight;
}

export function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
