
( function(){
    
    var ctrls={};
    
    ctrls.firstname=document.getElementById("fName");
    ctrls.lastname=document.getElementById("lName");
    ctrls.age=document.getElementById("Age");
    ctrls.countries=document.getElementById("countryList");
    ctrls.submitbtn=document.getElementById("btnSubmit");
    ctrls.male=document.getElementById("maleRadio");
    ctrls.female=document.getElementById("femaleRadio");
    
    
    
    function getData(){
        
        var profile={};
        
        profile.fisrstname1=ctrls.firstname.value;
        profile.lastname1=ctrls.lastname.value;
        profile.age1=ctrls.age.value;
        profile.countries1=ctrls.countries.value;
        profile.male1=ctrls.male.value;
        profile.female1=ctrls.female.value;
        
        if(ctrls.male.checked==true){
            console.log(profile.male1);
        }
        else if(ctrls.female.checked==true){
            console.log(profile.female1);
        }
        
        
    }
    function changeColor() {
            ctrls.submitbtn.style.backgroundColor = "orange";
        };
    
    function alphabetsOnly(evt){
        console.log(evt.keyCode);
       if ((evt.keyCode >= 65 && evt.keyCode <= 90) ||
                (evt.keyCode >= 97 && evt.keyCode <= 122)||evt.keyCode==32
            ) {
                console.log("Valid");
            } else {
                console.log("Invalid");
                evt.preventDefault();
            }
    }
    
    function numbersOnly(evt){
        if(evt.keyCode>=48 && evt.keyCode<=57){
            console.log("valid number")}
        else{
            
            evt.preventDefault();
        }
        
        
    }
    
    function bindEvents(){
        
        ctrls.submitbtn.addEventListener("click", getData);
        ctrls.firstname.addEventListener("keypress", alphabetsOnly);
        ctrls.lastname.addEventListener("keypress", alphabetsOnly);
        ctrls.age.addEventListener("keypress", numbersOnly);
        ctrls.submitbtn.addEventListener("mouseover", changeColor);
    }
    
    bindEvents();
    
    
    
    
    

})()