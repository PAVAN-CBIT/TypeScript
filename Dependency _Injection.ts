 
    DataService.ts
 ================================================================================================================================================================================
 export class DataService{

    public GetProducts(){

                            return[{Name:'TV',Price:56000.44},{Name:'Mobile',Price:12000}];
                        }





      public GetCategories(){

                                     return['Electronics','Footwear','Fashion'];
                            }                  
}


====================================================================================================================================================================================
    ProductComponent.ts
===============================================================================================================================================================================


import{DataService} from "../services/DataService";

export class ProductComponent{


    
                            constructor(private data:DataService){

                                                                  }

          public PrintProducts(){
                                                   console.log(`----Product List----`);

                                                    for(var product of this.data.GetProducts() )
                                                    {
                                                        console.log(`${product.Name}-${product.Price}`);
                                                    }
                                }


               public PrintCategories(){

                           console.log(`---Categories List----`);

                           for(var category of this.data.GetCategories()){
                               console.log(category);
                           }

               }                 


}
