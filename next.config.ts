import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	cacheComponents: true,
	experimental: {
		authInterrupts: true,
	},
	output: "standalone",
}

export default nextConfig