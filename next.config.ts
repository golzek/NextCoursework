import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	cacheComponents: true,
	experimental: {
		authInterrupts: true,
		missingSuspenseWithCSRBailout: false,
	},
}