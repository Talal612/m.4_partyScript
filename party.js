let UserAge;
    

do {  
      UserAge=prompt('Hi there,Please Enter your age:');
      
      if(UserAge<18) 
        alert('you are too young');
     

      else if(UserAge>35)
        alert('you are too old !');
   
      else
        alert('Hi '+prompt('Please Enter your name:') +' , Welcome to the party!');
      

    }while("Is there anyone else?")

