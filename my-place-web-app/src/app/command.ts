import { SignInComponent } from './sign-in/sign-in.component';

export interface Command {
  execute(): void;
}


/** Concrete Commands
 * Interface for specific components that will be used to execute commands
 * These components are the receivers of the commands
 * They are the ones that will be used to execute the commands
 * */
class SignInCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.CheckUser();
  }
}


class SignOutCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.signOut();
  }
}

class CreateBlogCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.createBlog();
  }
}

class CreatePostCommand implements Command {
  private receiver: SignInComponent;

  constructor(receiver: SignInComponent) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.createPost();
  }
}




