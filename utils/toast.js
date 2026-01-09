import { addToast as heroUIAddToast } from "@heroui/toast";
import { useEffect } from "react";

// Wrapper pour addToast qui force le z-index
export const addToast = (options) => {
	const result = heroUIAddToast(options);
	
	// Forcer le z-index après un petit délai pour laisser le DOM se créer
	setTimeout(() => {
		const toastContainers = document.querySelectorAll('[role="region"][aria-live="polite"]');
		toastContainers.forEach(container => {
			container.style.zIndex = '10000';
			container.style.position = 'fixed';
		});
		
		const toastElements = document.querySelectorAll('[data-slot="toast"]');
		toastElements.forEach(toast => {
			toast.style.zIndex = '10001';
		});
	}, 10);
	
	return result;
};
