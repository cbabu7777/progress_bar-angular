app.controller("myCtrl", function($scope) {
    ThisScope = $scope;
    $scope.apiresult = {"buttons":[10,23,5,-10],"bars":[10,10,10],"limit":150};
    $scope.updatebar = function(id,value){
    if($scope.apiresult.bars[id] + value >= 0){
        $scope.apiresult.bars[id] = $scope.apiresult.bars[id] + value;
        }
        else{
        $scope.apiresult.bars[id] = 0;
        }
    };
    $scope.barid = 0;
    $scope.classname = 'red';
     $scope.requery = function(){
         var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
             $scope.apiresult = JSON.parse(this.responseText);
                //setTimeout(
                //	function(){
                    ThisScope.$evalAsync();
                    //document.getElementById("mySelect").selectedIndex = "1"; 
                    //},200)
            }
          };
          xhttp.open("GET", "http://pb-api.herokuapp.com/bars", true);
          xhttp.send();  
    };
    
    $scope.requery(); 
    
}); 