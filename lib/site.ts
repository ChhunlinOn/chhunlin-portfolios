// Set NEXT_PUBLIC_SITE_URL to override; on Vercel the production domain is used automatically.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "")

export const siteName = "ON CHHUNLIN"
export const siteDescription =
  "ON CHHUNLIN is a Full Stack Developer from Cambodia building modern web and mobile apps with Next.js, React, Node.js, Ruby on Rails, Flutter and PostgreSQL."
export const ogImage =
  "https://res.cloudinary.com/deszfzhei/image/upload/v1765553979/obw410azxlahu0p6hj0l.jpg"
