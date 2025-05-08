import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // Add loading text
        const loadingText = this.add.text(400, 300, 'Loading...', {
            fontSize: '32px',
            fill: '#fff'
        });
        loadingText.setOrigin(0.5);
    }

    create() {
        try {
            // Create a simple background
            this.add.rectangle(0, 0, 1600, 1200, 0x1a1a1a).setOrigin(0, 0);

            // Create player (temporary rectangle)
            this.player = this.physics.add.rectangle(400, 300, 32, 32, 0x00ff00);
            this.player.setCollideWorldBounds(true);

            // Set up camera to follow player
            this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
            this.cameras.main.setBounds(0, 0, 1600, 1200);

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

            // Add player position text
            this.positionText = this.add.text(16, 40, '', {
                fontSize: '18px',
                fill: '#fff'
            });
            this.positionText.setScrollFactor(0);

            // Add some decorative elements
            for (let i = 0; i < 50; i++) {
                const x = Phaser.Math.Between(0, 1600);
                const y = Phaser.Math.Between(0, 1200);
                const size = Phaser.Math.Between(2, 4);
                this.add.circle(x, y, size, 0xffffff, 0.5);
            }

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
        
        // Get input state
        const left = this.cursors.left.isDown || this.wasd.left.isDown;
        const right = this.cursors.right.isDown || this.wasd.right.isDown;
        const up = this.cursors.up.isDown || this.wasd.up.isDown;
        const down = this.cursors.down.isDown || this.wasd.down.isDown;

        // Handle diagonal movement
        if (left) {
            this.player.setVelocityX(-speed);
        } else if (right) {
            this.player.setVelocityX(speed);
        }

        if (up) {
            this.player.setVelocityY(-speed);
        } else if (down) {
            this.player.setVelocityY(speed);
        }

        // Normalize diagonal movement
        if (this.player.body.velocity.x !== 0 && this.player.body.velocity.y !== 0) {
            this.player.body.velocity.normalize().scale(speed);
        }

        // Update position text
        this.positionText.setText(`Position: ${Math.floor(this.player.x)}, ${Math.floor(this.player.y)}`);
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