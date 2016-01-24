/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />
/// <reference path="TileClass.ts" />


module kittyGame {
    export class KittyCreator {
        public kittyIDs:number[];
        public filePathList:any;
        public bagOfKitties:Array<TileClass>;
        public genericBG:string;
        private catCompareBox:Array<TileClass>;

        constructor(){
            this.bagOfKitties = new Array<TileClass>();
            this.kittyIDs = [1,2,3,1,2,3];
            this.catCompareBox = new Array<TileClass>();


        }

        public createKitties() {
            for (var i=0; i<this.kittyIDs.length; i++){

                var x = (100 * i)+ 150;
                if (i % 2 != 0){
                    var y = 500;
                }
                else {
                    var y = 310;
                };

                var kitty = new TileClass(this.kittyIDs[i], x, y, (obj) => this.kittyClicked(obj));
                kitty.animate( i * 0.2);

                this.bagOfKitties.push(kitty);
            }
        }

        public kittyClicked(obj)
        {
            //console.log(obj);
            if(this.catCompareBox.length == 2){
                if (this.catCompareBox[0].id == this.catCompareBox[1].id){
                    this.catCompareBox[0].solved();
                    this.catCompareBox[1].solved();

                    //this.catCompareBox.push(obj);
                }
                else {
                    this.catCompareBox[0].flip();
                    this.catCompareBox[1].flip();

                    //this.catCompareBox.push(obj);
                }
                this.catCompareBox = [];
            }

            this.catCompareBox.push(obj);

        }

        public reset(){
            for (var i=0; i<this.bagOfKitties.length; i++){
                this.bagOfKitties[i].reset();
            }

            this.catCompareBox = [];
        }

    }


}
