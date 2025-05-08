# 🌌 Mantle Arena

**Mantle Arena** is a lunar survival game where players control an astronaut entirely through prompts. From mining rare resources to trading gear and earning $MNT tokens, every meaningful action is triggered by your words — and recorded on-chain via **Nebula by thirdweb**.

> _"Suit up and say the word. Every command matters."_

---

## 🎮 Game Overview

Mantle Arena is a unique blend of text-based adventure and blockchain gaming, where players navigate a lunar landscape through natural language commands. The game combines AI-powered dialogue interpretation with on-chain economic mechanics, creating an immersive experience where every action has real value.

### Core Game Loop

1. **Command Input**: Player types natural language commands
2. **AI Processing**: System interprets intent and context
3. **Game Action**: Character performs the requested action
4. **Blockchain Update**: Relevant actions are recorded on-chain
5. **Feedback Loop**: Game world and character respond to the action

---

## 🎯 Game Mechanics

### Movement & Exploration

- Navigate the lunar surface using directional commands
- Discover new areas and resources
- Interact with environmental elements
- Example commands:
  - `"Move to the northern crater"`
  - `"Explore the mining zone"`
  - `"Check the alien flora"`

### Resource Management

- Mine lunar resources (crystals, minerals)
- Manage oxygen levels and equipment durability
- Store and transport resources
- Example commands:
  - `"Mine the blue crystal"`
  - `"Check oxygen levels"`
  - `"Store resources in base"`

### Economy & Trading

- Buy and sell resources using $MNT tokens
- Upgrade equipment and gear
- Participate in the lunar marketplace
- Example commands:
  - `"Sell 5 lunar crystals"`
  - `"Buy advanced mining laser"`
  - `"Check market prices"`

---

## 🛠 Technical Architecture

### Frontend Layer

- **Game Engine**: Phaser.js for 2D rendering
- **UI Framework**: React + Tailwind CSS
- **State Management**: Redux/Context API
- **Asset Style**: Retro pixel art (GBA-inspired)

### Backend Layer

- **AI Processing**: OpenAI/DeepSeek for command interpretation
- **Game Logic**: Node.js server
- **State Management**: Redis for real-time updates

### Blockchain Integration

- **Network**: Nebula (thirdweb)
- **Smart Contracts**:
  - ERC-20: $MNT token for in-game economy
  - ERC-1155: Equipment and resource NFTs
  - Marketplace: Trading and auction system

### On-Chain Actions

```js
// Resource Mining
await contract.call("mintResource", ["lunar_crystal"]);

// Trading
await contract.call("sellToMarket", ["crystal", 5]);
await contract.call("buyItem", ["oxygen_tank"]);

// Equipment Management
await contract.call("upgradeEquipment", ["mining_laser"]);
```

---

## 🎨 Game World

### Lunar Environment

- **Map Size**: 1000x1000 units
- **Biomes**: Craters, Mining Zones, Alien Flora Fields
- **Hazards**: Radiation zones, Meteor showers
- **Resources**: Various crystal types, alien artifacts

### Character System

- **Stats**: Health, Oxygen, Energy
- **Equipment**: Mining tools, Oxygen tanks, Protective gear
- **Inventory**: Resource storage, Equipment slots

---

## 🚀 Getting Started

1. **Setup Environment**

   ```bash
   npm install
   npm run dev
   ```

2. **Connect Wallet**

   - Install MetaMask
   - Connect to Nebula network
   - Get initial $MNT tokens

3. **Start Playing**
   - Type your first command
   - Follow the tutorial prompts
   - Begin your lunar adventure

---

## 📝 Development Roadmap

### Phase 1 (Current)

- Basic movement and mining
- Simple resource economy
- Core blockchain integration

### Phase 2

- Advanced AI interactions
- Expanded world map
- Multiplayer features

### Phase 3

- Guild system
- Advanced trading
- Special events

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
