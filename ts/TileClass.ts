/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />
/// <reference path="Helper.ts" />

module kittyGame {
    export class TileClass {
        public id:number;
        public kittyImage: PIXI.Sprite;
        private isSolved:boolean;
        public kittyBG: PIXI.Sprite;
        private callback:any;


        constructor(kittyID: number, x:number, y:number, callback: void){
            this.id = kittyID;
            this.kittyImage = PIXI.Sprite.fromImage("assets/kitty" + kittyID + ".png");
            this.kittyImage.on("mousedown", () => this.mouseClick());
            this.kittyImage.x = x;
            this.kittyImage.y = y;
            this.kittyImage.anchor.set(0.5, 0.5);


            this.isSolved = false;

            this.kittyBG = PIXI.Sprite.fromImage("assets/background.png");
            this.kittyBG.on("mousedown", () => this.mouseClick());
            this.kittyBG.x = x;
            this.kittyBG.y = y;
            this.kittyBG.anchor.set(0.5, 0.5);

            this.callback = callback;
            this.reset();
        }

        private mouseClick(){
            this.flip();
            this.callback(this);
        }

        public flip() {
            this.kittyImage.visible = !this.kittyImage.visible;
            this.kittyBG.scale.x = 0;
            TweenMax.to(this.kittyBG.scale,0.3,{x:1} );
            this.kittyBG.visible = !this.kittyBG.visible;
            this.kittyImage.scale.x = 0;
            TweenMax.to(this.kittyImage.scale,0.3,{x:1} )
        };

        public solved(){
            this.kittyBG.interactive = false;
            this.kittyImage.interactive=false;
        }

        public reset(){
            this.kittyBG.visible = true;
            this.kittyImage.visible = false;
            this.kittyImage.interactive = true;
            this.kittyBG.interactive = true;
        }

        public animate(delayInSecs: number){
            this.kittyBG.y = this.kittyBG.y + 1000;
            //this.kittyBG.scale.x = 0;
            TweenMax.to(this.kittyBG,0.3,{y:this.kittyBG.y-1000, delay:delayInSecs} );
         //   TweenMax.to(this.kittyBG.scale,0.3,{x:1, delay:delayInSecs} )
        }

    }


}
