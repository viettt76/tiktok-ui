// Layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Discovery from '~/pages/Discovery';
import Upload from '~/pages/Upload';

// No need to login
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/:nickname', component: Profile },
   { path: '/following', component: Following },
   { path: '/discovery', component: Discovery },
   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
