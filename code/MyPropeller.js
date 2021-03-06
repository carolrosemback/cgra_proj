class MyPropeller extends CGFobject {
    constructor(scene) {
        super(scene);

        this.quad = new MyQuad2(this.scene);
        this.triangle = new MyTriangle(this.scene);

        this.initBuffers();
    }

    initBuffers(){
        this.quad.initBuffers();
        this.triangle.initBuffers();
    }


    display(){
        this.scene.pushMatrix();



        //quad

        this.scene.pushMatrix();
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(Math.PI/2.0, 1, 0, 0);
        this.scene.scale(0.2,0.2,0.2);
        this.quad.display();
        this.scene.popMatrix();


        //Triangle
        this.scene.pushMatrix();
        this.scene.scale(10,10,10);
        this.scene.translate(0,0,0.2);
        this.scene.scale(0.1,0.1,0.1);
        this.scene.rotate(Math.PI/2.0, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.popMatrix();
    }
}