// Import the SSR entry point (your generated SSR code)
import { default as ssrApp } from "../../.output/server/index.mjs";  // Adjust this path if needed
import { parse } from "querystring"; // For parsing query params or cookies, if required

// The SSR handler function for Netlify
exports.handler = async function(event, context) {
  // Parse the incoming event data (if needed)
  const request = event;

  try {
    // You can modify this to pass data, handle query parameters, etc.
    const html = await ssrApp.render(request);  // Assuming `ssrApp.render` is your SSR rendering function

    return {
      statusCode: 200,
      body: html,  // The HTML generated from SSR
      headers: {
        "Content-Type": "text/html",  // Ensure the content type is set to HTML for SSR
      },
    };
  } catch (err) {
    // Error handling if SSR fails
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "SSR error", error: err.message }),
    };
  }
};
