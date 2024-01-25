import { CanActivateFn } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Models/user';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService: AccountService = inject(AccountService);
  const toastr: ToastrService = inject(ToastrService);
  return accountService.currentUser$.pipe(
    map((user: User | null) => {
      if (user) return true;
      toastr.error('You are not authorized');
      return false;
    })
  );
};
