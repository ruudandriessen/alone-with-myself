import { createFileRoute, Navigate } from '@tanstack/solid-router';

export const Route = createFileRoute('/')({ component: Index });

function Index() {
    return <Navigate to="/satellite" />;
}
