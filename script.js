import random
from typing import List, Optional

class Property:
    """Represents a property on the Monopoly board"""
    def __init__(self, name: str, purchase_price: int, color: str, rent_price: int = None):
        self.name = name
        self.purchase_price = purchase_price
        self.color = color
        self.owner = None
        self.houses = 0
        self.hotels = 0
        self.is_mortgaged = False
        self.rent_price = rent_price or (purchase_price // 10)
    
    def __repr__(self):
        return f"{self.name} ({self.color})"

class Player:
    """Represents a player in the Monopoly game"""
    def __init__(self, name: str, animal_token: str, starting_money: int = 1500):
        self.name = name
        self.animal_token = animal_token
        self.balance = starting_money
        self.position = 0
        self.properties: List[Property] = []
        self.is_bankrupt = False
        self.jail_turns = 0
        self.in_jail = False
    
    def __repr__(self):
        return f"{self.name} ({self.animal_token}) - Balance: ${self.balance}"
    
    def move(self, spaces: int, board_size: int = 40):
        """Move the player forward on the board"""
        old_position = self.position
        self.position = (self.position + spaces) % board_size
        if old_position + spaces >= board_size:
            self.collect_go_money()
    
    def collect_go_money(self, amount: int = 200):
        """Collect money for passing GO"""
        self.balance += amount
        print(f"  🎉 {self.name} passed GO and collected ${amount}!")
    
    def pay(self, amount: int) -> bool:
        """Deduct money from player's balance"""
        if self.balance >= amount:
            self.balance -= amount
            return True
        return False
    
    def receive_money(self, amount: int):
        """Add money to player's balance"""
        self.balance += amount
    
    def buy_property(self, property_obj: Property) -> bool:
        """Buy a property if player has enough money"""
        if self.pay(property_obj.purchase_price):
            property_obj.owner = self
            self.properties.append(property_obj)
            print(f"✅ {self.name} bought {property_obj.name} for ${property_obj.purchase_price}")
            return True
        return False
    
    def get_total_assets(self) -> int:
        """Calculate total worth including cash and property value"""
        property_value = sum(p.purchase_price for p in self.properties)
        return self.balance + property_value

class Monopoly:
    """Main Monopoly game class"""
    
    ANIMAL_TOKENS = [
        "🐪 Camel",
        "🐕 Dog",
        "🐈 Cat",
        "🐸 Frog",
        "🦁 Lion",
        "🐢 Turtle",
        "🦊 Fox",
        "🐻 Bear",
        "🦉 Owl",
        "🦆 Duck",
        "🐙 Octopus",
        "🦅 Eagle",
        "🐘 Elephant",
        "🦒 Giraffe",
        "🦓 Zebra",
        "🦁 Lion",
        "🐅 Tiger",
        "🦁 Lion",
        "🐘 Elephant",
        "🦏 Rhino",
        "🦛 Hippo",
        "🦘 Kangaroo",
        "🐨 Koala",
        "🦘 Kangaroo",
    ]
    
    BOARD_SPACES = [
        ("GO", None, None),
        ("Mediterranean Avenue", 60, "Brown"),
        ("Community Chest", None, None),
        ("Baltic Avenue", 60, "Brown"),
        ("Income Tax", None, None),
        ("Reading Railroad", 200, "Railroad"),
        ("Oriental Avenue", 100, "Light Blue"),
        ("Chance", None, None),
        ("Vermont Avenue", 100, "Light Blue"),
        ("Connecticut Avenue", 120, "Light Blue"),
        ("Jail", None, None),
        ("St. Charles Place", 140, "Pink"),
        ("Electric Company", 150, "Utility"),
        ("States Avenue", 140, "Pink"),
        ("Virginia Avenue", 160, "Pink"),
        ("St. James Place", 180, "Orange"),
        ("Community Chest", None, None),
        ("Tennessee Avenue", 180, "Orange"),
        ("New York Avenue", 200, "Orange"),
        ("Free Parking", None, None),
        ("Kentucky Avenue", 220, "Red"),
        ("Chance", None, None),
        ("Indiana Avenue", 220, "Red"),
        ("Illinois Avenue", 240, "Red"),
        ("B&O Railroad", 200, "Railroad"),
        ("Atlantic Avenue", 260, "Yellow"),
        ("Ventnor Avenue", 260, "Yellow"),
        ("Water Works", 150, "Utility"),
        ("Marvin Gardens", 280, "Yellow"),
        ("Go To Jail", None, None),
        ("Pacific Avenue", 300, "Green"),
        ("North Carolina Avenue", 300, "Green"),
        ("Community Chest", None, None),
        ("Pennsylvania Avenue", 320, "Green"),
        ("Short Line", 200, "Railroad"),
        ("Chance", None, None),
        ("Park Place", 350, "Dark Blue"),
        ("Luxury Tax", None, None),
        ("Boardwalk", 400, "Dark Blue"),
    ]
    
    def __init__(self):
        self.players: List[Player] = []
        self.current_player_index = 0
        self.round_number = 0
        self.board: List[Optional[Property]] = []
        self.create_board()
        self.available_tokens = self.ANIMAL_TOKENS.copy()
    
    def create_board(self):
        """Create the board with properties"""
        for space_name, price, color in self.BOARD_SPACES:
            if price is not None:
                self.board.append(Property(space_name, price, color))
            else:
                self.board.append(None)
    
    def add_player(self, name: str, animal_token: str) -> Optional[Player]:
        """Add a player to the game"""
        if len(self.players) >= 8:
            print("❌ Maximum 8 players allowed!")
            return None
        
        if animal_token not in self.available_tokens:
            print(f"❌ That token is not available!")
            return None
        
        # Check if token is already taken
        for player in self.players:
            if player.animal_token == animal_token:
                print(f"❌ {animal_token} is already taken!")
                return None
        
        player = Player(name, animal_token)
        self.players.append(player)
        self.available_tokens.remove(animal_token)
        print(f"✅ {player} joined the game!")
        return player
    
    def setup_game(self):
        """Interactive setup for the game"""
        print("\n" + "=" * 70)
        print("🎲" * 10 + " WELCOME TO MONOPOLY " + "🎲" * 10)
        print("=" * 70)
        
        # Get number of players
        while True:
            try:
                num_players = int(input("\n📊 How many players? (2-8): "))
                if 2 <= num_players <= 8:
                    break
                print("⚠️  Please enter a number between 2 and 8.")
            except ValueError:
                print("⚠️  Please enter a valid number.")
        
        print(f"\n📝 Setting up {num_players} players...\n")
        
        # Add players
        for i in range(num_players):
            print(f"\n{'─' * 70}")
            print(f"PLAYER {i + 1} SETUP")
            print(f"{'─' * 70}")
            
            # Get player name
            name = input("👤 Enter player name: ").strip()
            if not name:
                name = f"Player {i + 1}"
            
            # Show available tokens
            print(f"\n🎭 Available animal tokens:")
            for idx, token in enumerate(self.available_tokens, 1):
                print(f"  {idx}. {token}")
            
            # Get token choice
            while True:
                try:
                    token_choice = int(input(f"\n🎭 {name}, choose a token number: "))
                    if 1 <= token_choice <= len(self.available_tokens):
                        chosen_token = self.available_tokens[token_choice - 1]
                        if self.add_player(name, chosen_token):
                            break
                    else:
                        print("⚠️  Invalid choice. Please try again.")
                except ValueError:
                    print("⚠️  Please enter a valid number.")
        
        print("\n" + "=" * 70)
        print("✅ GAME SETUP COMPLETE!")
        print("=" * 70)
        self.display_players()
    
    def display_players(self):
        """Display all players' current status"""
        print("\n📊 PLAYER STATUS:")
        print("─" * 70)
        for i, player in enumerate(self.players, 1):
            status = "🚫 BANKRUPT" if player.is_bankrupt else f"💰 ${player.balance}"
            properties_count = len(player.properties)
            space_name = self.BOARD_SPACES[player.position][0]
            print(f"  {i}. {player.animal_token} {player.name}")
            print(f"     └─ {status} | Properties: {properties_count} | Location: {space_name}")
    
    def roll_dice(self) -> int:
        """Roll two dice"""
        dice1 = random.randint(1, 6)
        dice2 = random.randint(1, 6)
        total = dice1 + dice2
        print(f"  🎲 Rolled: {dice1} + {dice2} = {total}")
        if dice1 == dice2:
            print(f"  🎉 Doubles! {self.current_player.name} rolls again!")
        return total
    
    @property
    def current_player(self) -> Player:
        """Get the current active player"""
        return self.players[self.current_player_index]
    
    def next_turn(self):
        """Move to the next player's turn"""
        self.current_player_index = (self.current_player_index + 1) % len(self.players)
    
    def handle_property_landing(self, player: Player, property_obj: Property):
        """Handle when a player lands on a property"""
        if property_obj.owner is None:
            print(f"\n🏠 Unowned property: {property_obj.name}")
            print(f"   💵 Purchase Price: ${property_obj.purchase_price}")
            print(f"   💰 Rent: ${property_obj.rent_price}")
            
            buy = input(f"   Do you want to buy it? (yes/no): ").lower().strip()
            if buy in ["yes", "y"]:
                if player.buy_property(property_obj):
                    pass
                else:
                    print(f"   ❌ Insufficient funds! You need ${property_obj.purchase_price} but only have ${player.balance}")
            else:
                print(f"   ➖ Property passed...")
        
        elif property_obj.owner != player:
            rent = property_obj.rent_price
            print(f"\n💸 {property_obj.name} is owned by {property_obj.owner.name}")
            print(f"   Rent due: ${rent}")
            
            if player.pay(rent):
                property_obj.owner.receive_money(rent)
                print(f"   ✅ {player.name} paid ${rent} to {property_obj.owner.name}")
            else:
                remaining_debt = rent - player.balance
                property_obj.owner.receive_money(player.balance)
                player.balance = 0
                player.is_bankrupt = True
                print(f"   ❌ {player.name} cannot pay full rent (needed ${rent}, had ${player.balance}) and is BANKRUPT!")
        
        else:
            print(f"   ✨ {player.name} owns this property!")
    
    def play_turn(self):
        """Execute one player's turn"""
        player = self.current_player
        
        if player.is_bankrupt:
            print(f"\n⏭️  {player.name} is bankrupt, skipping turn...")
            self.next_turn()
            return
        
        print(f"\n{'=' * 70}")
        print(f"🎮 {player.animal_token} {player.name}'s Turn")
        print(f"{'=' * 70}")
        print(f"💰 Cash: ${player.balance} | Properties: {len(player.properties)} | Total Assets: ${player.get_total_assets()}")
        
        # Roll dice
        spaces = self.roll_dice()
        player.move(spaces)
        
        space_name, price, color = self.BOARD_SPACES[player.position]
        print(f"  📍 {player.name} landed on: {space_name}")
        
        # Handle special spaces
        if space_name == "Go To Jail":
            print(f"  🚔 {player.name} goes to Jail!")
            player.position = 10
            player.in_jail = True
        
        elif space_name == "Free Parking":
            print(f"  🅿️  Free Parking - Nothing happens")
        
        elif space_name == "Jail":
            print(f"  🚔 Just visiting jail")
        
        elif space_name == "Income Tax":
            tax = min(200, player.balance // 10)
            player.pay(tax)
            print(f"  💸 Income tax: ${tax}")
        
        elif space_name == "Luxury Tax":
            tax = min(75, player.balance)
            player.pay(tax)
            print(f"  💸 Luxury tax: ${tax}")
        
        elif space_name in ["Community Chest", "Chance"]:
            print(f"  🎰 {space_name}: Draw a card! (Coming soon)")
        
        elif price is not None:
            # It's a purchasable property
            property_obj = self.board[player.position]
            if property_obj:
                self.handle_property_landing(player, property_obj)
        
        self.next_turn()
    
    def play_game(self, num_rounds: int = 10):
        """Play the game for a specified number of rounds"""
        print(f"\n🎮 Starting game with {len(self.players)} players... Playing {num_rounds} rounds!\n")
        
        for round_num in range(num_rounds):
            print(f"\n{'#' * 70}")
            print(f"ROUND {round_num + 1}/{num_rounds}")
            print(f"{'#' * 70}")
            
            active_players = [p for p in self.players if not p.is_bankrupt]
            if len(active_players) <= 1:
                print("\n❌ Game Over: Only one player left!")
                break
            
            for _ in range(len(self.players)):
                active_players = [p for p in self.players if not p.is_bankrupt]
                if len(active_players) <= 1:
                    break
                self.play_turn()
            
            self.display_players()
            
            # Ask to continue after each round
            if round_num < num_rounds - 1:
                cont = input("\n⏱️  Continue to next round? (yes/no): ").lower().strip()
                if cont in ["no", "n"]:
                    print("Ending game early...")
                    break

def main():
    """Run the game"""
    try:
        game = Monopoly()
        game.setup_game()
        
        # Play the game
        try:
            num_rounds = int(input("\n⏱️  How many rounds would you like to play? (default 10): ") or "10")
            if num_rounds < 1:
                num_rounds = 10
        except ValueError:
            num_rounds = 10
        
        game.play_game(num_rounds)
        
        print("\n" + "=" * 70)
        print("🏁 GAME ENDED - FINAL STANDINGS")
        print("=" * 70)
        game.display_players()
        
        # Determine winner
        if game.players:
            winner = max(game.players, key=lambda p: p.get_total_assets())
            print(f"\n🏆 WINNER: {winner.animal_token} {winner.name}")
            print(f"   Total Assets: ${winner.get_total_assets()}")
            print(f"   Cash: ${winner.balance}")
            print(f"   Properties: {len(winner.properties)}")
            
            if winner.properties:
                print(f"   Properties owned:")
                for prop in winner.properties:
                    print(f"      - {prop.name} (${prop.purchase_price})")
        
        print("\n" + "=" * 70)
        print("Thanks for playing Monopoly! 🎲")
        print("=" * 70 + "\n")
    
    except KeyboardInterrupt:
        print("\n\nGame interrupted. Thanks for playing!")
    except Exception as e:
        print(f"\n❌ An error occurred: {e}")

if __name__ == "__main__":
    main()
