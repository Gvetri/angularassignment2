(function () {
  'use strict';

angular.module('ShoppingListApp',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  var prueba = "prueba";
  list1.items = ShoppingListCheckOffService.getItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
    var list = this;
}

function ShoppingListCheckOffService(){
  var service = this;
  var item1 = new Object();
  item1.name = "cookies";
  item1.quantity = 10;
  var item2 = new Object();
  item2.name = "chips";
  item2.quantity = 15;
  var items = [item1,item2];


  service.getItems = function(){
    return items
  };
}


})();
