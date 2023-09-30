import ('./game-state.js');


class RockPaperScissors {
  private static state = null;

  public static start() {
    RockPaperScissors.state = State.START;
  }
}

