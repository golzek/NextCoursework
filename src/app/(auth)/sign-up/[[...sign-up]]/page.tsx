import { SignUp } from "@clerk/nextjs"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default function Page() {
	return (
		<Suspense>
			<SignUp />
		</Suspense>
	)
}