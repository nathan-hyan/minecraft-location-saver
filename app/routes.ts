import { route, index } from '@react-router/dev/routes';

export default [
  index('./screens/root.tsx'),
  route('create', './screens/create/route.tsx'),
  route('edit/:id', './screens/edit/route.tsx'),
];
