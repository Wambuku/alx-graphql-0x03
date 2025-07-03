import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://YOUR_SENTRY_DSN@o0.ingest.sentry.io/0", // replace with your DSN from Sentry dashboard
  tracesSampleRate: 1.0, // or adjust as needed
});
