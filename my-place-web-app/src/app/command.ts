import { SignInComponent } from './sign-in/sign-in.component';
import { User } from './User';
import { UserService } from './user.service';


export interface Command {
  execute(): void;
}

class SignInCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.CheckUser();
  }
}


class CreateBlogCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    //this.receiver.submitText();
  }
}

class CreateUserCommand implements Command {
  constructor(private userService: UserService, private user: User) {}

  execute(): void {
    this.userService.createUser(this.user);
  }
}

class StoreUserCommand implements Command {
  constructor(private userService: UserService, private user: User) {}

  execute(): void {
    this.userService.storeUserInLocalStorage(this.user);
  }
}
