(function(){
    function employee(){
    this.empid=501;
    this.fName="";
    this.lName="";
    var sal=1000;
    }
    
    var manager=new employee();
    manager.teamleadCount=5;
    console.log(manager.empid);
    
    
    var teamlead =new employee();
    teamlead.devloperCount=10;
    
    console.log(teamlead);
  
    
    employee.prototype.gender="male";
    
    
    var superadmin=new Object(manager);
    superadmin.reportingmanagers=15;
    console.log(superadmin);
    
    console.log(superadmin.empid);
    
    
})()