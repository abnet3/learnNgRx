import { CanActivateFn, Router } from '@angular/router';

import { MasterService } from '../shared/master.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const currentMenu = route.url[0].path;
  const access = inject(MasterService);

  if (access.hasAccess()) {

    return true;
    // if (currentMenu == 'blog') {
    //   return true;
    // } else {
    //   alert('You dont have access');
    //   router.navigate(['/']);
    // }
  } else {
    alert('You dont have access');
    router.navigate(['/']);
    return false;
  }
};
