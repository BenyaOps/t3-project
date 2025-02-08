import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)', 
    '/forum(.*)',
    '/events(.*)',
  ]
)

export default clerkMiddleware(async (auth, req) => {
  
  if (isProtectedRoute(req)) await auth.protect();
    //si algo falla valida si es auth o auth()
    if (!isPublicRoute(req)) {
      await auth.protect()
    }
},{
    authorizedParties: [
      "https://t3-project-5of0unz17-benyaminroots-projects.vercel.app",
      "https://t3-project-hazel.vercel.app",
      "http://localhost:3000"
      
    ]
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}