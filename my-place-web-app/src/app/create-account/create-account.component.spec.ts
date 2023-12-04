import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccountComponent } from './create-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { User } from '../User';


describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountComponent]
    });
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


createNewUser() {
  if (this.username.length != 0 && this.password.length != 0 && this.email.length != 0 && this.bio.length != 0) {
    if (this.password == this.confirmpassword) {
      const newUser = {
        username: this.username,
        password: this.password,
        email: this.email,
        bio: this.bio,
        profilePicture: this.profilePic(),
        friends: ['Team_MyPlace']
      };

      console.log(newUser)

      var storedUsers = localStorage.getItem('Users');
      let users: any[] = [];

      if (storedUsers != null) {
        users = JSON.parse(storedUsers);
        console.log('Users retrieved from local storage:', this.users);
        users.push(newUser)

        console.log('New Users added to list :', users);
        localStorage.setItem('Users', JSON.stringify(users));
        localStorage.setItem('profileUser', JSON.stringify(newUser));
        setTimeout(() => {
          this.router.navigateByUrl("/user");
        }, 500);
      }
    }
    else {
      alert("please make sure that the password match")
    }
  }
  else {
    alert("please fill out everything before moving forward")
  }
}
