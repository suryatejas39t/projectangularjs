var app = angular.module("gameStore", []);

app.controller("GameController", function($scope){

    $scope.games = [
        { 
            name:"PUBG",
            details:"Online Multiplayer Game",
            price: 1000,
            discount: 20
        },
        {
            name: "FIFA 25",
            details: "Popular Football Simulation Game",
            price: 2500,
            discount: 15
        },
        {
            name: "GTA V",
            details: "Open World Action Adventure Game",
            price: 1800,
            discount: 30
        },
        {
            name: "Minecraft",
            details: "Creative Sandbox Building Game",
            price: 1200,
            discount: 10
        },
        {
            name: "Call of Duty",
            details: "First-Person Shooting Game",
            price: 2200,
            discount: 25
        }
    ];

    $scope.cart = [];

    $scope.addToCart = function(game){
        $scope.cart.push(game);
    };

    $scope.removeFromCart = function(index){
        $scope.cart.splice(index, 1);
    };

    $scope.getTotal = function(){
        var total = 0;

        for(var i = 0; i < $scope.cart.length; i++){
            total += $scope.cart[i].price -
                     ($scope.cart[i].price * $scope.cart[i].discount / 100);
        }

        return total;
    };

    $scope.placeOrder = function(){

        if($scope.cart.length === 0){
            $scope.orderMessage = "⚠ Your cart is empty!";
            return;
        }

        $scope.orderMessage = "✅ Order placed successfully! Thank you for shopping with us.";

        $scope.cart = [];
    };

});