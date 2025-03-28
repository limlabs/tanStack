import { default as ssrApp } from "../../.output/server/index.mjs";  // Adjust this path if needed
import { parse } from "querystring"; // For parsing query params or cookies, if required

// The SSR handler function for Netlify
exports.handler = async function(event, context) {
  // Log the incoming request to check if it's being received properly
  console.log("Received event:", event);

  try {
    // Check if ssrApp is properly imported
    console.log("SSR App loaded:", ssrApp);

    // Attempt SSR rendering
    const html = await ssrApp.render(event);  // Assuming ssrApp.render() works for SSR

    // Log the generated HTML to verify it looks correct
    console.log("Generated HTML:", html);

    return {
      statusCode: 200,
      body: html,  // The HTML generated from SSR
      headers: {
        "Content-Type": "text/html",  // Ensure the content type is set to HTML for SSR
      },
    };
  } catch (err) {
    // Log the error if SSR fails
    console.error("SSR error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "SSR error", error: err.message }),
    };
  }
};
