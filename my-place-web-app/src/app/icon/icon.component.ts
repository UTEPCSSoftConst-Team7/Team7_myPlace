import { Component,OnInit  } from '@angular/core';
import { User,UserBlogPost,BlogPost } from '../User';
import { UserService } from '../user.service';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
icons: string[]=['assets/dice.png','assets/cat.png','assets/catFist.png','assets/joji.png','assets/mfDoom.png',
'assets/peopleiconmp.png','assets/pizzabella.png','assets/sandy.png','assets/spiderman.png','assets/amongUs.png']


  constructor(private router: Router,private userService: UserService){ }


  ngOnInit() :void{

  }




  changeIcon(icon:string){
    // alert('button works '+icon)
    const profile = localStorage.getItem('profileUser')
    let ProfileUser: User
    //change the specific user
    if (profile != null || profile != undefined) {
      ProfileUser=JSON.parse(profile)
      ProfileUser.profilePicture=icon
      console.log('p', ProfileUser)
      localStorage.setItem('profileUser',JSON.stringify(ProfileUser))

          //change it in all of the users 
    var storedUsers = localStorage.getItem('Users');
    let users: User[] = [];

    if (storedUsers != null){
      users = JSON.parse(storedUsers);
      for(let i =0;i<users.length;i++){
        if(users[i].username==ProfileUser.username){
          users[i].profilePicture=icon;
          break;
        }
      }
      console.log('u',users)

      this.sendBack()
    }
    }

  }
  sendBack(){
    this.router.navigateByUrl("/user")
  }
}
