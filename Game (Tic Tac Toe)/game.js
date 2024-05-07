// Game object to encapsulate game logic
const TicTacToeGame = {
    currentPlayer: 'X',
    gameBoard: ['', '', '', '', '', '', '', '', ''],
    gameOver: false,
  
    // Function to handle player's move
    playerMove(index) {
      if (!this.gameOver && this.gameBoard[index] === '') {
        this.gameBoard[index] = this.currentPlayer;
        this.updateUI(index);
  
        if (this.checkWinner()) {
          this.displayWinner(`${this.currentPlayer} wins! Redirecting...`);
          this.gameOver = true;
          this.redirect();
        } else if (!this.gameBoard.includes('')) {
          this.displayWinner('It\'s a draw! Redirecting...');
          this.gameOver = true;
          this.redirect();
        } else {
          this.currentPlayer = 'O';
          setTimeout(() => this.computerMove(), 500);
        }
      }
    },
  
    // Function to handle computer's move
    computerMove() {
      if (!this.gameOver) {
        const emptyCells = this.gameBoard.reduce((acc, cell, index) => {
          if (cell === '') {
            acc.push(index);
          }
          return acc;
        }, []);
  
        if (emptyCells.length > 0) {
          const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          this.gameBoard[randomIndex] = 'O';
          this.updateUI(randomIndex);
  
          if (this.checkWinner()) {
            this.displayWinner('Computer wins! Redirecting...');
            this.gameOver = true;
            this.redirect();
          } else if (!this.gameBoard.includes('')) {
            this.displayWinner('It\'s a draw! Redirecting...');
            this.gameOver = true;
            this.redirect();
          } else {
            this.currentPlayer = 'X';
          }
        }
      }
    },
  
    // Function to check for a winner
    checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (this.gameBoard[a] !== '' && this.gameBoard[a] === this.gameBoard[b] && this.gameBoard[a] === this.gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    },
  
    // Function to update the UI
    updateUI(index) {
      const cell = document.querySelector(`[data-index="${index}"]`);
      cell.textContent = this.currentPlayer;
    },
  
    // Function to display the winner message on the page
    displayWinner(message) {
      // Update a message on the page, e.g., document.getElementById('result').textContent = message;
      alert(message); // For simplicity, using alert in this example
    },
  
    // Function to redirect to a new page
    redirect() {
      // Redirect to a new webpage after a delay
      setTimeout(() => {
        window.location.href = 'D:\\GameRealm Website Project\\Registration Page\\index.html'; // Replace with your desired URL
      }, 1000); // Redirect after 1 seconds (adjust as needed)
    }
  };
  
  // Event listener for cell clicks
  document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => TicTacToeGame.playerMove(index));
  });
  