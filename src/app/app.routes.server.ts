import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'food-catalogue/:id',
    renderMode: RenderMode.Server // Exclude this route from prerendering
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
