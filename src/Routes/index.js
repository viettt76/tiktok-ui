import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Discovery from '~/pages/Discovery';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// No need to login
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.following, component: Following },
   { path: config.routes.discovery, component: Discovery },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
