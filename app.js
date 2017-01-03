(function () {
  'use strict';

angular.module('ShoppingListApp',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  //var removeItem = "removeItem";
  list1.items = ShoppingListCheckOffService.getItems();

  list1.removeItem = function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
    if (list1.items.length == 0){
        console.log("Removing Item");
        list1.doneMessage = "Everything is bought!";
    }
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
    var list = this;
    //METODo que funciona
    // list.bought_items = ShoppingListCheckOffService.getBoughtItems();
    list.getBoughtItems;
    list.status;
    //Esta funcion no esta funcionando por que se llama solo una vez
    list.get_bought_items = function(){
      console.log("Function get bought items");
      list.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();
      console.log(list.getBoughtItems.length);
      if (list.getBoughtItems.length == 0){
          console.log("Nothing has been bought");
          list.doneMessage = "Nothing is bought!";
          list.status = true;
      } else {
        list.status = false;
      }
      return list.getBoughtItems;
    };

}

function ShoppingListCheckOffService(){
  var service = this;

  var item1 = new Object();
  item1.name = "cookies";
  item1.quantity = 10;
  var item2 = new Object();
  item2.name = "chips";
  item2.quantity = 15;
  var item3 = new Object();
  item3.name = "coca-cola";
  item3.quantity = 5;
  var items = [item1,item2,item3];

  var bought_items = [];

  service.getItems = function(){
    console.log("Get items to be bought");
    return items;
  };


  service.removeItem = function(itemIndex){
    bought_items.push(items[itemIndex]);
    items.splice(itemIndex,1);
  };

  service.getBoughtItems = function(){
    return bought_items;
  };


}


})();
