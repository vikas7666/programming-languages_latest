"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundry({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();

    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };

    return (
        <div>
            <p>{error.message}</p>
            <div onClick={reload}>Reload</div>
        </div>
    );
}