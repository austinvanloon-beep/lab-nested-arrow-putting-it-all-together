function createLoginTracker(userInfo) {
  let attemptCount = 0; // login tracker

  const tryLogin = (passwordAttempt) => {
    attemptCount++;  // increase attempt count for every try


     if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

     if (passwordAttempt === userInfo.password) {
      return "Login successful";

       } else {
      return `Login attempt ${attemptCount}: Login failed.`;
    }
  };


  return tryLogin; // returns inner function
}

const tracker = createLoginTracker({ username: "user1", password: "secret123" });

console.log(tracker("no")); // Login attempt 1 failed
console.log(tracker("wrong")); // Login attempt 2 failed
console.log(tracker("notit")); // Login attempt 3 failed
console.log(tracker("incorrect")); // account lock


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};