import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // Load game assets
        this.load.image('tiles', 'assets/tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        this.load.spritesheet('player', 'assets/player.png', { 
            frameWidth: 32, 
            frameHeight: 32 
        });

        // Add loading text
        const loadingText = this.add.text(400, 300, 'Loading...', {
            fontSize: '32px',
            fill: '#fff'
        });
        loadingText.setOrigin(0.5);
    }

    create() {
        try {
            // Create the tilemap
            const map = this.make.tilemap({ key: 'map' });
            const tileset = map.addTilesetImage('tileset', 'tiles');
            
            if (!tileset) {
                console.error('Failed to load tileset');
                return;
            }

            const layer = map.createLayer('Tile Layer 1', tileset, 0, 0);
            
            if (!layer) {
                console.error('Failed to create map layer');
                return;
            }

            // Create player sprite
            this.player = this.physics.add.sprite(400, 300, 'player', 0);
            this.player.setCollideWorldBounds(true);

            // Set up camera to follow player
            this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
            this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

            // Set up keyboard input
            this.cursors = this.input.keyboard.createCursorKeys();
            this.wasd = {
                up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
                down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
                left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
                right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
            };

            // Add debug text
            this.debugText = this.add.text(16, 16, 'Use WASD or Arrow Keys to move', {
                fontSize: '18px',
                fill: '#fff'
            });
            this.debugText.setScrollFactor(0);
        } catch (error) {
            console.error('Error in create:', error);
            this.add.text(400, 300, 'Error loading game', {
                fontSize: '32px',
                fill: '#ff0000'
            }).setOrigin(0.5);
        }
    }

    update() {
        if (!this.player) return;

        // Reset velocity
        this.player.setVelocity(0);

        // Handle movement
        const speed = 150;
        
        // Arrow keys
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.setVelocityX(speed);
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.setVelocityY(-speed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.setVelocityY(speed);
        }
    }
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: GameScene
};

// Initialize the game
new Phaser.Game(config); 