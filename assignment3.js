class restaurantManager{
	restaurantList= [
{
    name:"Khana Khazana",
    address:{
        Pincode:122017,
        Landmark:"Behind Windchant Towers",
        Area:"New Palam Vihar"
    },
    city:"Mumbai"
},
{
    name:"Moti Mahal",
    address:{
        Pincode:411001,
        Landmark:"Siddharth Nagar Hathi Circle",
        Area:"Goregaon west"
    },
    city:"Mumbai"
},
{
    name:"Punjabi Tadka",
    address:{
        Pincode:211014,
        Landmark:"DLF-Mall",
        Area:"D-508 4th Floor"
    },
    city:"New Delhi"
}
]
       printAllRestaurantNames(){
	for (let i = 0; i < this.restaurantList.length; i++) {
                console.log(this.restaurantList[i].name);
              } 
        }  
    
   

    
    filterRestaurantByCity(givenCity){
      this.restaurantList.filter(function(list){
            if(list.city === givenCity){
            console.log(list.name)
            }
        }) 
    }

}



class PunjabiTadka{  
    orderData = {
        'Below 500': 20,
        '500-1000': 29,
        '1000-1500': 30,
        '1500-2000': 44,
        'Above 2000': 76
    };
    ordercount =0;

    
    countoforders(){
        for(let x in this.orderData)
            this.ordercount = this.ordercount + this.orderData[x];
        console.log("The count of all orders is :"+this.ordercount);
    }
    countofproportions(){
        console.log("The number of proportions in the orderData is :"+Object.keys(this.orderData).length)
    }
}


let restaurant1 = new restaurantManager();
restaurant1.printAllRestaurantNames();      
restaurant1.filterRestaurantByCity('New Delhi')


let ord = new PunjabiTadka();
ord.countoforders();                      
ord.countofproportions();                 
const print = [
    {
        id:1,
        order:"Below 500",
        orderPercentage:(((ord.orderData["Below 500"])/199) *100),//.... order percentage calcultion...//
        restaurant: "Punjabi Tadka"
    },
   { 
        id:2,
        order:"500-1000",
        orderPercentage:(((ord.orderData["500-1000"])/199) *100),
        restaurant: "Punjabi Tadka"
    },
    {
        id:3,
        order:"1000-1500",
        orderPercentage:(((ord.orderData["1000-1500"])/199) *100),
        restaurant: "Punjabi Tadka"
    },
    {
        id:4,
        order:"1500-2000",
        orderPercentage:(((ord.orderData["1500-2000"])/199) *100),
        restaurant: "Punjabi Tadka"
    },
    {
        id:5,
        order:"Above 2000",
        orderPercentage:(((ord.orderData["Above 2000"])/199) *100),
        restaurant: "Punjabi Tadka"
    }]
     
    print.forEach((item,index)=>{
    console.log(item)
     })



