// ei file ta  src tei open kore hoi 

// ei code tah documentation theke newa 
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // services er path gulare detect  korte hobe

    // browser e giye jhor khore cookies add  kore dichi 
    const currentCookies =request.cookies.get('nextjs.token')
    // console.log(currentCookies)
    //  if (currentCookies) {
    //     return new NextResponse('cookie akhaba ');
    // }

    const userData = {
        role: 'admin',
        email: 'test@admin.com'
    }

    // checking it is working or not 
    // if (request.nextUrl.pathname.startsWith('/services')) {
    //     return new NextResponse('Middleware activated for /services');
    // }
    let isServicesPage = request.nextUrl.pathname.startsWith('/services');
    let isAdmin = userData.role == 'user'


    if (isServicesPage && !isAdmin) {
        // return NextResponse.redirect(new URL('/login', request.url))
        // rewrite ektu alada see on url
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    return NextResponse.next();
}

// export const config = {
//   matcher: '/about/:path*',
// }

