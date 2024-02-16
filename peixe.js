var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {       
    //carregar o mar
    this.load.image('mar', 'assets/fundoAzul.png');
    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixe_amarelo.png');
    //carregando novo elemento..uma concha :)
    this.load.image('concha', 'assets/concha.png');
}

function create() {     
    this.add.image(400, 300, 'mar');
    //adicionando a logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);
    //elemento adicional, conchinha :)
    this.add.image(600, 600, 'concha');
    //adicionando o peixe na tela, guardando em uma variavel
    peixinho = this.add.image(400, 300, 'peixe');
    //transformando a variavel
    peixinho.setFlip(true, false);
}
 
function update() {    
    // adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
