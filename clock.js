/**
 * A class to create a clock and update its time.
 */
export class Clock {
  constructor(element, timeZone) {
    this.element = element;
    this.timeZone = timeZone;
  }

  /**
   * Starts the clock and sets the update interval.
   */
  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  /**
   * Updates the time on the clock. Can optionally specify a new timezone.
   *
   * @param timeZone The time zone using the IANA timezone code.
   */
  update(timeZone = this.timeZone) {
    this.timeZone = timeZone;
    const parts = this.getTime(timeZone);
    const minuteFormatted = parts.minute.toString().padStart(2, "0");

    this.element.querySelector(".clock-time").textContent =`${parts.hour}:${minuteFormatted}`;
  }

  /**
   * Helper function to get the hour and minutes of the time for a given timezone.
   *
   * @param timeZone The time zone using the IANA timezone code.
   * @returns {{hour: number, minute: number}} An object containing the hour and minute.
   */
  getTime(timeZone) {
    const now = new Date(
        new Date().toLocaleString('en-US', {
          timeZone,
        })
    );
    return {
      hour: now.getHours(),
      minute: now.getMinutes(),
    };
  }
}
