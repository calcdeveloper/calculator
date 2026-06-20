import React from 'react';

export default function ApiTesterSeo() {
  const faqs = [
    {
      q: 'Why am I getting a CORS (Cross-Origin Resource Sharing) error?',
      a: 'Because this API Tester operates entirely within your web browser (client-side), it is strictly bound by the browser\'s CORS security policies. If the API server you are attempting to hit does not explicitly return the `Access-Control-Allow-Origin: *` header, your browser will actively block the JavaScript from reading the response. To bypass CORS for testing, you must either configure the target server or use a dedicated desktop application.'
    },
    {
      q: 'Can I test authenticated API endpoints (like Stripe or AWS)?',
      a: 'Yes, absolutely. You can construct authenticated requests by adding the `Authorization` key in the Headers tab and pasting your `Bearer {YOUR_TOKEN}` or Basic Auth credentials as the value. Since all requests are executed locally, your proprietary credentials are never sent to our servers; they travel directly from your browser to the target API.'
    },
    {
      q: 'Does this tool save my request history or API keys?',
      a: 'No. This tool is engineered with a strict zero-retention policy. We do not utilize `localStorage`, cookies, or backend databases to save your API endpoints, headers, or JSON payloads. The moment you refresh the page or close the tab, all session data is permanently destroyed, ensuring absolute security for your proprietary tokens.'
    },
    {
      q: 'How does it calculate the Response Time metric?',
      a: 'The response time is calculated utilizing the high-resolution `performance.now()` API. It measures the absolute latency from the exact millisecond the HTTP request is dispatched from your browser\'s network interface until the final byte of the response body is successfully downloaded and parsed into memory.'
    },
    {
      q: 'Can I send a POST request without a Body payload?',
      a: 'Yes, the HTTP/1.1 specification allows for POST requests with an empty body (Content-Length: 0). However, most RESTful APIs expect a JSON payload for POST and PUT operations. If you provide a body, ensure you set the `Content-Type: application/json` header, although our tool attempts to automatically infer this if you paste valid JSON.'
    }
  ];

  return (
    <article className="prose prose-slate max-w-none bg-dev-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-dev-gray mt-12">
      
      {/* TABLE OF CONTENTS */}
      <div className="p-6 bg-dev-gray/10 rounded-2xl border border-dev-gray/30">
        <h4 className="text-sm font-bold text-dev-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-dev-primary list-none p-0 m-0">
          <li>• <a href="#restful-architecture" className="hover:underline transition-colors">The Architecture of RESTful Microservices</a></li>
          <li>• <a href="#http-verbs" className="hover:underline transition-colors">Mastering HTTP Verbs and Idempotency</a></li>
          <li>• <a href="#headers-auth" className="hover:underline transition-colors">HTTP Headers and Cryptographic Authentication</a></li>
          <li>• <a href="#json-payloads" className="hover:underline transition-colors">Structuring Complex JSON Payloads</a></li>
          <li>• <a href="#cors-security" className="hover:underline transition-colors">Navigating CORS Security Protocols</a></li>
          <li>• <a href="#status-codes" className="hover:underline transition-colors">Debugging HTTP Status Codes</a></li>
          <li>• <a href="#performance" className="hover:underline transition-colors">Analyzing API Response Latency</a></li>
          <li>• <a href="#security" className="hover:underline transition-colors">Zero-Trust Client-Side Architecture</a></li>
        </ul>
      </div>

      <section id="restful-architecture" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">The Architecture of RESTful Microservices</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          The modern internet is no longer powered by monolithic servers returning massive HTML documents. It is powered by hyper-fragmented microservice architectures communicating exclusively through REST (Representational State Transfer) and GraphQL APIs. 
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          When a user opens a modern React application, the browser acts as a headless client, making dozens of asynchronous HTTP requests to various cloud endpoints (e.g., fetching user data from AWS, verifying payments via Stripe, pulling inventory from a specialized database).
        </p>
        <p className="text-lg text-dev-dark/80">
          An API Tester is an absolute necessity in this ecosystem. It allows frontend engineers to isolate and query a specific microservice directly, completely bypassing the complex UI logic. By observing the raw JSON response, developers can verify the database state, debug schema mutations, and confirm network connectivity before writing a single line of frontend code.
        </p>
      </section>

      <section id="http-verbs" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Mastering HTTP Verbs and Idempotency</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          RESTful architecture relies heavily on semantic HTTP verbs to declare the exact mathematical intent of a network request. Using the incorrect verb can lead to catastrophic database corruption.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          <strong>GET</strong> requests are strictly for retrieving data. They must be "idempotent" and "safe," meaning executing a GET request 10,000 times should never alter the server's database state. <strong>POST</strong> is utilized to create entirely new records (e.g., registering a new user). <strong>PUT</strong> is utilized to completely overwrite an existing record, while <strong>PATCH</strong> surgically updates specific fields. <strong>DELETE</strong> destroys the record.
        </p>
        <p className="text-lg text-dev-dark/80">
          Our API Tester provides a rigid dropdown to strictly enforce these verbs, allowing engineers to test the full CRUD (Create, Read, Update, Delete) lifecycle of their backend controllers and verify that the server is returning the correct mathematical state changes.
        </p>
      </section>

      <section id="headers-auth" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">HTTP Headers and Cryptographic Authentication</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          The URI (URL) and the Body payload only represent a fraction of an HTTP request. The vast majority of complex architectural metadata is transmitted invisibly within the HTTP Headers.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          Headers dictate content negotiation (e.g., `Accept: application/json`), enforce caching policies (`Cache-Control: no-cache`), and most importantly, carry cryptographic authentication tokens. Modern APIs utilize JWT (JSON Web Tokens) or OAuth 2.0 Bearer tokens for stateless authentication.
        </p>
        <p className="text-lg text-dev-dark/80">
          The API Tester features a dynamic Header Builder, allowing engineers to inject custom `Authorization` keys, spoof `User-Agent` strings to test mobile-only endpoints, and provide necessary `X-Api-Key` parameters required by enterprise gateways like AWS API Gateway or Kong.
        </p>
      </section>

      <section id="json-payloads" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Structuring Complex JSON Payloads</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          When executing POST, PUT, or PATCH requests, the client must transmit data to the server. While legacy systems utilized `x-www-form-urlencoded` or XML, 99% of modern REST APIs require strict, deeply nested JSON payloads.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          Constructing these payloads manually within a `curl` command inside a bash terminal is a notoriously painful experience due to complex quote escaping rules (e.g., `{'curl -d "{\\"key\\":\\"value\\"}"'}`).
        </p>
        <p className="text-lg text-dev-dark/80">
          Our tool provides a massive, raw text editor explicitly designed for drafting multi-kilobyte JSON payloads. When you dispatch the request, our engine automatically detects the presence of JSON syntax and intelligently attempts to append the `Content-Type: application/json` header if you forgot to specify it, streamlining the debugging workflow.
        </p>
      </section>

      <section id="cors-security" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Navigating CORS Security Protocols</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          The most frequent point of failure when utilizing a browser-based API Tester is the CORS (Cross-Origin Resource Sharing) security policy. CORS is a fundamental browser security mechanism designed to prevent malicious websites from hijacking a user's session and secretly querying banking APIs in the background.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          When our API Tester attempts to fetch `https://api.example.com`, your browser intercepts the request. It first checks if `api.example.com` explicitly allows requests originating from our domain by looking for the `Access-Control-Allow-Origin` header. If that header is missing or restrictive, your browser will violently kill the request, resulting in a network error.
        </p>
        <p className="text-lg text-dev-dark/80">
          This is not a bug in the API Tester; it is a critical security feature working exactly as intended. To test APIs that enforce strict CORS policies, engineers must either utilize a desktop application (which is immune to browser CORS policies) or temporarily configure their backend server to emit wildcard CORS headers during the development phase.
        </p>
      </section>

      <section id="status-codes" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Debugging HTTP Status Codes</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          A robust API does not simply return data; it returns semantic HTTP status codes that dictate the absolute state of the transaction. Interpreting these codes is mandatory for building resilient frontend error-handling logic.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          Our API tester explicitly highlights the returned status code in the response pane. A `2xx` series (like `200 OK` or `201 Created`) glows green, indicating mathematical success. A `4xx` series (like `400 Bad Request`, `401 Unauthorized`, or `404 Not Found`) indicates a client-side failure—you provided a malformed payload or an invalid authentication token.
        </p>
        <p className="text-lg text-dev-dark/80">
          A `5xx` series (like `500 Internal Server Error` or `502 Bad Gateway`) glows red, indicating a catastrophic failure on the backend infrastructure. By isolating these codes in the API Tester, developers can mathematically prove whether a bug exists in their React frontend code or if the backend Node.js controller is actually crashing.
        </p>
      </section>

      <section id="performance" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Analyzing API Response Latency</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          In high-performance applications, functionality is irrelevant if the latency is unacceptable. If an API takes 2,500 milliseconds (2.5 seconds) to return a JSON payload, the user experience will degrade severely, leading to massive bounce rates.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          Our API Tester utilizes the browser's high-resolution performance timers to track the absolute lifecycle of the HTTP request. We display the total transaction time in milliseconds (ms) alongside the raw byte size of the returned payload.
        </p>
        <p className="text-lg text-dev-dark/80">
          This data allows engineers to profile massive endpoints. If an endpoint returns 5 Megabytes of data and takes 3,000ms, the engineering team must immediately architect a solution—either implementing backend pagination, utilizing GraphQL to restrict the data payload, or injecting Redis caching layers to accelerate the database query.
        </p>
      </section>

      <section id="security" className="pt-4">
        <h2 className="text-3xl font-bold text-dev-dark mb-4 tracking-tight">Zero-Trust Client-Side Architecture</h2>
        <p className="mb-4 text-lg text-dev-dark/80">
          Traditional online API testing platforms (like Postman's cloud tier or generic REST clients) frequently route your HTTP request through their proprietary backend servers to bypass CORS restrictions.
        </p>
        <p className="mb-4 text-lg text-dev-dark/80">
          This introduces a catastrophic enterprise security vulnerability. Routing a request through a third-party server means that the third party gains absolute access to your proprietary API endpoints, your raw JSON payloads, and most dangerously, your active Bearer Tokens and AWS API Keys.
        </p>
        <p className="text-lg text-dev-dark/80">
          We architected our API Tester utilizing an uncompromising Zero-Trust model. Your HTTP request is executed natively by your browser's `fetch()` API. It travels directly from your local network to the target server. Absolutely zero proxy servers or middleware are utilized, mathematically guaranteeing that your proprietary data and authentication credentials are never intercepted or logged by our infrastructure.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="pt-8 border-t border-dev-gray mt-12">
        <h2 className="text-3xl font-bold text-dev-dark mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-dev-white border border-dev-gray rounded-2xl open:shadow-md transition-all"
            >
              <summary className="font-bold px-6 py-5 cursor-pointer text-dev-dark text-lg flex justify-between items-center hover:bg-dev-gray/5 transition-colors">
                {faq.q}
                <span className="text-dev-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-dev-dark/70 text-base border-t border-dev-gray/50 pt-4 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
