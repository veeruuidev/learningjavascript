//(function () {
//    
//    var ctrls={};
//    ctrls.empTable=document.getElementById("tblEmployee");
//
//    var emp = [{
//            empId: 400,
//            fName: "Kiran",
//            lName: "PVS"
//        },
//        {
//            empId: 401,
//            fName: "Sneha",
//            lName: "P"
//        }, ];
//    
//    function buildTrTag(empl){
//        var trforemployee=document.createElement("tr");
//        
//        var tdforempid=document.createElement("td");
//            tdforempid.textContent=empl.empId;
//        var tdforfname=document.createElement("td");
//            tdforfname.textContent=empl.fName;
//        var tdforlname=document.createElement("td");
//            tdforlname.textContent=empl.lName;
//        
//        
//        trforemployee.appendChild(tdforempid);
//        trforemployee.appendChild(tdforfname);
//        trforemployee.appendChild(tdforlname);
//        
//        ctrls.empTable.appendChild(trforemployee);
//        
//        
//    }
//    
//    function buildEmpTable(){
//        
//        for(i=0;i<=emp.length;i++){
//            
//            var employee=emp[i];
//            console.log(employee);
//            
//            buildTrTag(employee);
//        }
//    }
//    
//   function init(){
//       buildEmpTable();
//       
//   } ;
//    
//    init()
//    
//    
//
//
//})()
//

var artists = ['Led Zeppelin', 'ACDC', 'Rolling Stones'],
    artistTemplate = _.template('<li><%= artist %></li>'),
    content = '';

_.each(artists, function(artist, index, artists) {
  content += artistTemplate({
    artist: artist
  });
});

var container = document.createElement('ul');
container.innerHTML = content;
document.body.appendChild(container);


var a=_.range(0,50,5);
console.log(a);


var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
art={};
var empty=_.isEmpty(art);
console.log(empty);