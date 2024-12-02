import { route, index } from '@react-router/dev/routes';

export default [
  index('./screens/viewer.tsx'),
  route('create', './screens/create.tsx'),
  route('edit/:id', './screens/edit.tsx'),
  route('destroy/:id', './screens/destroy.tsx'),
];
