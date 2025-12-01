/**
 * Demo Node.js Application
 * 
 * This is a basic placeholder function to demonstrate
 * the structure of a Node.js project.
 */

/**
 * Placeholder function that performs a simple operation.
 * 
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name) {
  return `Hello, ${name}! Welcome to the demo_node project.`;
}

/**
 * Main function to run the application.
 */
function main() {
  console.log('Starting demo_node application...\n');
  
  // Call the placeholder function
  const message = greet('World');
  console.log(message);
  
  console.log('\nApplication completed successfully.');
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
}

// Export the greet function for use in other modules
module.exports = { greet };
