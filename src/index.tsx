import {
    createRouter,
    RouterProvider,
} from '@tanstack/solid-router';
import { render } from 'solid-js/web';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
    interface Register {
        router: typeof router;
    }
}

// Render the app
render(
    () => <RouterProvider router={router} />,
    document.body,
);
