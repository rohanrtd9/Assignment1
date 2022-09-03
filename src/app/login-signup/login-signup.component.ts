import { Component, OnInit } from '@angular/core';
import { Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  setLoginVis=true;
  constructor(public auth:Auth, public router: Router) { }

  ngOnInit(): void {
  }
  handleSignup(formVal:any)
  {
    console.log(formVal)
    createUserWithEmailAndPassword(this.auth,formVal.emailS,formVal.passwordS)
    .then((response)=> console.log(response))
    .catch((error)=>{alert(error.message)});
    console.log(formVal)
  }
  handleLogin(formVal:any)
  {
    signInWithEmailAndPassword(this.auth,formVal.email,formVal.password)
    .then((response)=> {
      alert("Login Successful");
      this.router.navigate(['home']);
    })
    .catch((error)=> alert(error.message));
  }

}
