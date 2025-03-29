// .netlify/functions/ssr.js
import { default as ssrApp } from "../../.output/server/index.mjs";  // Ensure path is correct

exports.handler = async function(event, context) {
  // Log incoming request details for debugging
  console.log("Received event:", JSON.stringify(event, null, 2));  // Log entire event for full context
  console.log("Request headers:", JSON.stringify(event.headers, null, 2)); // Log headers
  console.log("Request body:", event.body); // Log body content

  try {
    // Check if ssrApp is properly loaded
    if (!ssrApp || typeof ssrApp.render !== 'function') {
      throw new Error("SSR App or render function not loaded correctly");
    }

    console.log("SSR App loaded successfully.");

    // Attempt SSR rendering
    const html = await ssrApp.render(event);  // Make sure render() is working properly

    // Log the generated HTML (or part of it) for verification
    console.log("Generated HTML:", html.slice(0, 500)); // Only log a snippet to avoid excessive output

    return {
      statusCode: 200,
      body: html,  // The HTML generated from SSR
      headers: {
        "Content-Type": "text/html",  // Ensure the content type is set to HTML for SSR
      },
    };
  } catch (err) {
    // Log the error if SSR fails
    console.error("SSR error:", err.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "SSR error", error: err.message }),
    };
  }
};
