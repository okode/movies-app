export const AppRoutes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'movie-detail/:id', loadChildren: './pages/movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'person-detail/:id', loadChildren: './pages/person-detail/person-detail.module#PersonDetailPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
