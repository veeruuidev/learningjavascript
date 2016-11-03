(function () {
    
    var ctrls={};
    ctrls.empTable=document.getElementById("tblEmployee");

    var emp = [{
            empId: 400,
            fName: "Kiran",
            lName: "PVS"
        },
        {
            empId: 401,
            fName: "Sneha",
            lName: "P"
        }, ];
    
    function buildTrTag(empl){
        var trforemployee=document.createElement("tr");
        
        var tdforempid=document.createElement("td");
            tdforempid.textContent=empl.empId;
        var tdforfname=document.createElement("td");
            tdforfname.textContent=empl.fName;
        var tdforlname=document.createElement("td");
            tdforlname.textContent=empl.lName;
        
        
        trforemployee.appendChild(tdforempid);
        trforemployee.appendChild(tdforfname);
        trforemployee.appendChild(tdforlname);
        
        ctrls.empTable.appendChild(trforemployee);
        
        
    }
    
    function buildEmpTable(){
        
        for(i=0;i<=emp.length;i++){
            
            var employee=emp[i];
            console.log(employee);
            
            buildTrTag(employee);
        }
    }
    
   function init(){
       buildEmpTable();
       
   } ;
    
    init()
    
    


})()

