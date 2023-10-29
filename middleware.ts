import { NextRequest, NextResponse } from "next/server";
import { LocalStorageKeys, getInLocalStorage } from "./utilities/local-storage-manage";
import { User } from "./context/auth-context/AuthContextProvider";

export function middleware(request: NextRequest) {
    const session = request.cookies.get('token')?.value
    const apikey = request.cookies.get('apikey')?.value
    const email = request.cookies.get('email')?.value

    if(email){
        if(request.nextUrl.pathname.startsWith('/auth/change-password') || request.nextUrl.pathname.startsWith('/auth/recover-password')
        || request.nextUrl.pathname.startsWith('/auth/login')){
            return NextResponse.redirect(new URL("/auth/confirm-recover", request.url))
        }
    }


    if(apikey){
        if(request.nextUrl.pathname.startsWith('/auth/recovery-password') || request.nextUrl.pathname.startsWith('/auth/confirm-recover')
        || request.nextUrl.pathname.startsWith('/auth/login')){
            return NextResponse.redirect(new URL("/auth/change-password", request.url))
        }
    }

    if(session){
        const user:User = JSON.parse(request.cookies.get('profile')?.value!)
        if(request.nextUrl.pathname.startsWith('/auth/login')){
            return NextResponse.redirect(new URL("/", request.url))
        }
        if (request.nextUrl.pathname.startsWith('/sales') && !user.permissions.includes('ventas')) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        if (request.nextUrl.pathname.startsWith('/products') && !user.permissions.includes('productos')) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        if (request.nextUrl.pathname.startsWith('/purchases') && !user.permissions.includes('compras')) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        if (request.nextUrl.pathname.startsWith('/providers') && !user.permissions.includes('proveedor')) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        if (request.nextUrl.pathname.startsWith('/supplies') && !user.permissions.includes('insumos')) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        
    }else {
        if(request.nextUrl.pathname.startsWith('/sales') || request.nextUrl.pathname.startsWith('/products') || request.nextUrl.pathname.startsWith('/purchases') || request.nextUrl.pathname.startsWith('/providers') || request.nextUrl.pathname.startsWith('/supplies')){
            return NextResponse.redirect(new URL("/auth/login", request.url))
        }
    }
}

export const config = {
    matcher: ["/auth/:path*", '/sales', "/products/:path*", "/purchases/:path*", "/providers/:path*", "/supplies/:path*"],
  };