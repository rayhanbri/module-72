// ei file ta  src tei open kore hoi 

// ei code tah documentation theke newa 
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
//   ekhon amara about  page  jawar chesta korle amader redirect kore home patai dhibhe 
}
 
export const config = {
  matcher: '/about/:path*',
}