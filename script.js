// Function called by the button click
function calculate() {
  const total = parseInt(document.getElementById('totalClasses').value);
  const attended = parseInt(document.getElementById('attendedClasses').value);
  const perDay = parseInt(document.getElementById('classesPerDay').value);
  const result = document.getElementById('result');

  // Input Validation
  if (attended > total || total <= 0 || perDay <= 0 || attended < 0) {
    result.textContent = "⚠️ Please enter valid positive numbers. 'Classes Attended' must not exceed 'Total Classes'.";
    result.style.color = "red";
    return;
  }

  // Calculate attendance percentage
  const attendancePercent = (attended / total) * 100;

  // Case 1: Student has >= 75% attendance
  if (attendancePercent >= 75) {
    const maxBunkableSlots = Math.floor((attended / 0.75) - total);
    const maxBunkableDays = Math.floor(maxBunkableSlots / perDay);

    result.innerHTML = `
      ✅ You are above 75% attendance.<br><br>
      You can still <strong>bunk ${maxBunkableDays} day(s)</strong>
      (<strong>${maxBunkableSlots} class slot(s)</strong>) and still maintain 75%.
    `;
    result.style.color = "green";

  } else {
    // Case 2: Student has < 75% attendance
    const requiredSlots = Math.ceil((0.75 * total - attended) / (1 - 0.75));
    const requiredDays = Math.ceil(requiredSlots / perDay);

    result.innerHTML = `
      ⚠️ Your attendance is below 75%.<br><br>
      You need to attend at least <strong>${requiredDays} more day(s)</strong>
      (<strong>${requiredSlots} class slot(s)</strong>) to reach 75% attendance.
    `;
    result.style.color = "red";
  }
}

// Optional: Add Enter key support for better user experience
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to input fields for Enter key press
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculate();
      }
    });
  });
});