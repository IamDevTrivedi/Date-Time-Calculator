// Create a new Date object representing the current date and time
const date = new Date();

// Get and log the current year
console.log(date.getFullYear());  // e.g., 2024

// Get and log the current month (zero-indexed: 0 = January, 5 = June, etc.)
console.log(date.getMonth());     // e.g., 5 (June)

// Get and log the current date (day of the month)
console.log(date.getDate());      // e.g., 19

// Get and log the current hour
console.log(date.getHours());     // e.g., 12

// Get and log the current minute
console.log(date.getMinutes());   // e.g., 0

// Get and log the current second
console.log(date.getSeconds());   // e.g., 0

// Get and log the current millisecond
console.log(date.getMilliseconds()); // e.g., 0

// Get and log the day of the week (zero-indexed: 0 = Sunday, 3 = Wednesday, etc.)
console.log(date.getDay());       // e.g., 3 (Wednesday)

// Log the current date and time in ISO 8601 format
console.log(date.toISOString());   // e.g., 2024-06-19T12:00:00.000Z

// Log the current date in a human-readable string format
console.log(date.toDateString());  // e.g., Wed Jun 19 2024

// Log the current time in a human-readable string format
console.log(date.toTimeString());  // e.g., 12:00:00 GMT+0000 (Coordinated Universal Time)

// Log the current date and time in a locale-specific string format
console.log(date.toLocaleString()); // e.g., 6/19/2024, 12:00:00 PM (depends on locale)

// Log the current date in a locale-specific string format
console.log(date.toLocaleDateString()); // e.g., 6/19/2024 (depends on locale)

// Log the current time in a locale-specific string format
console.log(date.toLocaleTimeString()); // e.g., 12:00:00 PM (depends on locale)


// All Information: https://chatgpt.com/share/d89060b8-cd32-4edb-bb3a-fbce7624a22b