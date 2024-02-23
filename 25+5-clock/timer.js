/**
 * @namespace Timer
 * @property session  - The session data
 * @property break    - The break data
 * */
/**
 * The timer object.
 * This houses all of the data & controls for the timer.
 * */
const timer = {
  status: { running: false, finalMinute: false, session: "SESSION" },
  session: {
    minutes: 25,
    seconds: 0,
    countdownId: null,
    paused: false,
    done: false,
  },
  break: {
    minutes: 5,
    seconds: 0,
    countdownId: null,
    paused: false,
    done: false,
  },

  /**
   * Set the session/break interval ID so it can be identified for cancellation
   *
   * @param {Object} countdownInfo
   * @param {string} countdownInfo.sessionType    - flag to indicate whether break or session should be initialized
   * @param {number} countdownInfo.interval       - return value from setInterval function
   */
  set countdown({ sessionType, interval }) {
    if (!this[sessionType].countdownId) {
      this[sessionType].countdownId = interval;
    }
  },

  /**
   * Get the remaining time left in the session
   *
   * @returns {string} String representing the current session length (format: mm:ss)
   */
  get sessionTimeLeft() {
    return `${this.session.minutes
      .toString()
      .padStart(2, 0)}:${this.session.seconds.toString().padStart(2, 0)}`;
  },

  /**
   * Get the remaining time left in the break
   *
   * @returns {string} String representing the current break length (format: mm:ss)
   */
  get breakTimeLeft() {
    return `${this.break.minutes.toString().padStart(2, 0)}:${this.break.seconds
      .toString()
      .padStart(2, 0)}`;
  },

  /**
   * Increase the session/break length by 1 minute
   *
   * @param {string} sessionType    - flag to indicate whether break or session should be incremented
   */
  incrementMinutes(sessionType, ui = false) {
    if (timer.status.running === true || timer[sessionType].minutes === 60)
      return;

    timer[sessionType].minutes++;
    if (timer[sessionType].seconds > 0 || timer[sessionType].minutes === 1) {
      timer[sessionType].minutes++;
    }
    timer[sessionType].seconds = 0;
    timer.updateUITimeDisplay();
    if (ui) timer.updateUIMinutes();
  },

  /**
   * Decrease the session/break length by 1 minute
   *
   * @param {string} sessionType    - flag to indicate whether break or session should be decremented
   * @param {boolean} ui
   */
  decrementMinutes(sessionType, ui = false) {
    if (
      timer[sessionType].minutes === (ui ? 1 : 0) ||
      (ui && timer.status.running)
    ) {
      return;
    }

    timer[sessionType].minutes--;
    timer[sessionType].seconds = 0;
    timer.updateUITimeDisplay();
    if (ui && timer.status.running === false) timer.updateUIMinutes();
  },

  /**
   * Decrease the session/break length by 1 second
   *
   * @param {string} sessionType    - flag to indicate whether break or session should be decremented
   */
  decrementSeconds(sessionType) {
    if (!this[sessionType].seconds) {
      this.decrementMinutes(sessionType, false);
      this[sessionType].seconds = 59;
      this.status.finalMinute = !this[sessionType].minutes;
      return;
    }

    this[sessionType].seconds--;
    this.updateUITimeDisplay();
  },

  /**
   * 1. Clear the countdownId from the call stack
   * 2. Reset the countdownId
   * 3. Play the beep sound to signify the timer has ended
   *    - *only if* `endCountdown = true`
   * 4. Update the "done" status for the timer
   *    - *only if* `endCountdown = true`
   *
   * @param {string} sessionType
   * @param {boolean} [endCountdown=true]
   */
  stop(sessionType, endCountdown = true) {
    if (this[sessionType].countdownId) {
      clearInterval(this[sessionType].countdownId);
      this[sessionType].countdownId = null;
    }

    if (endCountdown) {
      $("#beep")[0].play();

      $("#beep").on("ended", function () {
        $(this)[0].pause();
      });
    }

    this[sessionType].done = endCountdown;
    this[sessionType].paused = !endCountdown;
    this.status.running = false;
    $("#start_stop i").removeClass("fa-pause").addClass("fa-play");
  },

  /**
   * - Updates timer's corresponding session type's status &
   * sets the countdownId for the `sessionType` to a new `setInterval` function, initializing the countdown.
   *
   * - The UI will update with text indicating whether a session or break has started.
   *
   * - The `sessionType` seconds are decremented by 1 every second, and the UI is updated with the new time left.
   *
   * - Once one `sessionType` reaches no time left, the countdown is stopped, and the next `sessionType` is initialized.
   *
   * @param {string} sessionType - flag to indicate whether break or session is starting
   * @param {boolean} init - flag to indicate whether countdown is resuming or starting over
   *
   * @summary Initialize the countdown
   */
  start(sessionType, init = true) {
    this.status.running = true;
    this.status.session = sessionType.toUpperCase();
    this.updateUISessionType();
    $("#start_stop i").removeClass("fa-play").addClass("fa-pause");

    if (init) this[sessionType].done = false;
    else this[sessionType].paused = false;

    this.countdown = {
      sessionType,
      interval: setInterval(() => {
        if (!this[sessionType].minutes && !this[sessionType].seconds) {
          this.stop(sessionType);

          this.session.minutes = Number($("#session-length").html());
          this.session.seconds = 0;
          this.break.minutes = Number($("#break-length").html());
          this.break.seconds = 0;

          if (sessionType === "session") {
            this.start("break");
          } else {
            this.start("session");
          }

          this.updateUITimeDisplay();
          return;
        }

        this.decrementSeconds(sessionType);
        this.updateUITimeDisplay();
      }, 1000),
    };
  },

  /** Start the timer from it's current time */
  resume() {
    timer.start(timer.session.done === false ? "session" : "break", false);
  },

  /** Stop the timer without resetting it */
  pause() {
    timer.stop(timer.session.done === false ? "session" : "break", false);
  },

  /**
   * 1. Stop any running session or break
   * 2. Set the session time back to 25 minutes, 0 seconds
   * 3. Set the break time back to 5 minutes, 0 seconds
   * 4. Stop the beep sound & reset the audio
   * 5. Update the UI
   *
   * @summary Reset the timer to default settings
   * */
  reset() {
    ["break", "session"].forEach(sessionType => {
      if (timer[sessionType].countdownId) {
        timer.stop(sessionType, false);
      }
    });

    timer.status.session = "SESSION";

    timer.session.minutes = 25;
    timer.session.seconds = 0;
    timer.session.done = false;

    timer.break.minutes = 5;
    timer.break.seconds = 0;
    timer.session.done = false;

    $("#beep")[0].pause();
    $("#beep")[0].currentTime = 0;

    timer.updateUIMinutes();
    timer.updateUITimeDisplay();
    timer.updateUISessionType();
  },

  updateUIMinutes() {
    $("#session-length").html(timer.session.minutes || 1);
    $("#break-length").html(timer.break.minutes || 1);
  },

  updateUITimeDisplay() {
    $("#time-left")
      .html(
        timer.session.done === false
          ? timer.sessionTimeLeft
          : timer.breakTimeLeft
      )
      .css(
        "color",
        timer.status.running && timer.status.finalMinute
          ? "crimson"
          : "ghostwhite"
      );
  },

  updateUISessionType() {
    $("#timer-label").html(this.status.session);
  },
};

const {
  session: { minutes: sessionMins },
  break: { minutes: breakMins },
  sessionTimeLeft,
  breakTimeLeft,
  reset,
  resume,
  pause,
  incrementMinutes,
  decrementMinutes,
  updateUIMinutes,
} = timer;

$(document).ready(() => {
  $("#break-length").text(breakMins);
  $("#session-length").text(sessionMins);
  $("#timer-label").text(timer.status.session);
  $("#time-left").text(sessionTimeLeft);

  $("#break-decrement").on("click", () => {
    decrementMinutes("break", true);
    if (timer.status.running === false) updateUIMinutes();
  });

  $("#break-increment").on("click", () => {
    incrementMinutes("break", true);
    if (timer.status.running === false) updateUIMinutes();
  });

  $("#session-decrement").on("click", () => {
    decrementMinutes("session", true);
    if (timer.status.running === false) updateUIMinutes();
  });

  $("#session-increment").on("click", () => {
    incrementMinutes("session", true);
    if (timer.status.running === false) updateUIMinutes();
  });

  $("#start_stop").on("click", function () {
    if ($(this).children("i").is(".fa-play")) {
      resume();
    } else {
      pause();
    }
  });

  $("#reset").on("click", () => reset());
});
