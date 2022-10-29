const minAge = 18;
const maxAge = 35;
    do {  
      age=prompt('Hi there,Please Enter your age:');
      if(age>=minAge && age<=maxAge)
      {
        namee=prompt('Please Enter your name:');
        prompt('Welcome ',namee ,'!');
      }
      
      else if(age<minAge) 
      { 
        prompt('you are too young');
      }

      else if(age>maxAge)
      {
        prompt('you are too old');
      }

    }while("Is there anyone else?")

