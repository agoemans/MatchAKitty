/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="KittyCreator.ts" />
/// <reference path="StartButton.ts" />

module kittyGame {
    export class GameApp {
        public stage:PIXI.Container;
        public renderer:PIXI.SystemRenderer;
        public mainContainer:HTMLCanvasElement;
        public startButton: StartButton;
        private kittygame:KittyCreator;

        constructor(){
            this.stage = new PIXI.Container();
            this.mainContainer = <HTMLCanvasElement>document.getElementById("maincontainer");
            this.renderer = PIXI.autoDetectRenderer(800,600,{view:this.mainContainer,backgroundColor:0xd7fdde});
            this.startButton = new StartButton(() => this.startButtonPressed());
            this.kittygame = new KittyCreator();

            //todo - move all the addchild to respective classes
            this.stage.addChild(this.startButton.graphics);

            document.body.appendChild(this.renderer.view);

            requestAnimationFrame( () => this.animate() );

            //todo - remove later

            this.kittygame.createKitties();
            for (var i=0; i<this.kittygame.bagOfKitties.length; i++){
                this.stage.addChild(this.kittygame.bagOfKitties[i].kittyImage);
                this.stage.addChild(this.kittygame.bagOfKitties[i].kittyBG);
            }
        }

        public animate(){
            // render the stage
            this.renderer.render(this.stage);
            requestAnimationFrame( () => this.animate() );

        }

        private startButtonPressed(){

            this.kittygame.reset();
        }
    }

}
