// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: any; // Replace 'any' with your user type if you have one
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '$env/static/private' {
	export const RESEND_API_KEY: string;
	// Add other environment variables here if needed
}

export {};
